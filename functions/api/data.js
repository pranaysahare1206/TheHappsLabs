export async function onRequestGet(context) {
  try {
    const data = await context.env.MYHAPPS_DB.get('site_data');
    if (data) {
      return new Response(data, {
        headers: { 'Content-Type': 'application/json' }
      });
    }
    return new Response(JSON.stringify({ error: "No data found" }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "KV Not Bound" }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

export async function onRequestPost(context) {
  try {
    const body = await context.request.json();
    
    // Server-side password verification (timezone safe)
    const getPassForDate = (date) => '0' + String(date.getDate()).padStart(2,'0') + String(date.getMonth()+1).padStart(2,'0') + String(date.getFullYear()).slice(-2) + '0';
    
    const d = new Date();
    const dMinus1 = new Date(d.getTime() - 86400000);
    const dPlus1 = new Date(d.getTime() + 86400000);
    
    const validPasses = [getPassForDate(d), getPassForDate(dMinus1), getPassForDate(dPlus1)];
    
    if (!validPasses.includes(body.password)) {
      return new Response(JSON.stringify({ error: `Unauthorized. Provided: ${body.password}, Expected one of: ${validPasses.join(', ')}` }), { 
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Save to Cloudflare KV
    await context.env.MYHAPPS_DB.put('site_data', JSON.stringify(body.data));
    
    return new Response(JSON.stringify({ success: true }), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.toString() }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
