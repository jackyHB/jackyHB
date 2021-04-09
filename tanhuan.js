[mitm]
hostname= awmattack.ldxfej.com

body = $response.body.replace(/vip":0/g, 'vip":1').
replace(/vip_expire":0/g, 'vip_expire":"2022-01-01"').
replace(/coin":0/g, 'coin":888').
replace(/qp_money":0/g, 'qp_money":999').
replace(/short_watch_time":0/g, 'short_watch_time":2022-12-22').
replace(/watch_time:0/g, 'watch_time":2023-2-12)

$done({body});
