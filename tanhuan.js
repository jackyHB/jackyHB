QX:
[rewrite_local]
^https:\/\/awmattack\.(.+)\.com\/(api/member/info|api/video/video/video_play) url script-response-body https://raw.githubusercontent.com/jackyHB/jackyHB/main/tanhuan.js
[mitm]
hostname = awmattack.*.com

下载地址:
http://69n1.cn
http://neihan4871.com

*/
var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const a = '/api/member/info';
const b = '/api/video/video/video_play';

if (url.indexOf(a) != -1) {
    obj.data.item.vip = 1,
    obj.data.item.vip_expire = 4092647115,
    obj.data.item.coin = 999880,
    obj.data.item.nick = "By：H.  ",
    body = JSON.stringify(obj);
}
if (url.indexOf(b) != -1) {
    obj.data.vip = 0,
    obj.data.price = 0,
    body = JSON.stringify(obj);
}


$done({body});
