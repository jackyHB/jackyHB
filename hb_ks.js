/*
IOS/安卓： 快手 普通版
邀请下载链接：https://kicdjpmlo.sx3i65zvgw3g8k.com/fission/offkwai/landpagex?code=2235402609&platform=qrcode&fid=2764597391&subBiz=INVITE_CODE&kpn=KUAISHOU&shareToken=Y3rDbpqo1
邀请二维码(直接扫描打不开的话，下载后用快手APP扫一扫)：https://raw.githubusercontent.com/leafxcy/JavaScript/main/ks.png

脚本目前会做签到和翻倍，开宝箱和翻倍，看广告任务，逛街任务，直播任务

CK里的api_st跟快手极速版的通用，但是需要额外一个did(设备号)，同一台设备捉包的话可以把did复制一遍粘贴到每个账号的api_st后面，建议用不同设备捉包
V2P和圈X配置好重写后，应该打开APP就能获取到CK，重写跟快手极速版的冲突，需要关掉其中一个
青龙把任意包里的kuaishou.api_st=xxxxxxxxxxxx;和did=yyyyyyyyyyy;这两段连在一起放到变量ksCookie里，多账户换行或者@隔开
export ksCookie='kuaishou.api_st=xxxxxxxxxxxx; did=yyyyyyyyyyy;'

默认每天14点提现，0点自动兑换金币，要改提现时间的话，把提现时间(小时)填到变量ksWithdrawTime里
默认提现2块到绑定的提现账号，都有绑定的话默认提现到支付宝
要改金额的话把提现金额填到变量ksCash里。如果提现失败，手动接验证码提现一次
需要手动设置提现渠道的话，微信把 ksPayType=WECHAT; ，支付宝把 ksPayType=ALIPAY; 写到对应账号ck后面
设置变量ksNotify为0/1/2可以控制不通知/提现时间通知/每次运行都通知，默认提现时间通知

定时一天最少10次(一般10次能做完任务)，最好改掉默认时间，不然太多人同一时间跑

重写：
[task_local]
#快手
15 7-18 * * * https://raw.githubusercontent.com/leafxcy/JavaScript/main/ks.js, tag=快手, enabled=true
[rewrite_local]
appsupport/yoda/biz/info url script-request-header https://raw.githubusercontent.com/leafxcy/JavaScript/main/ks.js
ksapp/client/package/renew url script-request-header https://raw.githubusercontent.com/leafxcy/JavaScript/main/ks.js
[MITM]
hostname = api.kuaisho*.com
hostname = open.kuaisho*.com
*/
const _0x2fc758 = _0x42bc; (function (_0x308438, _0x45a55d) { const _0x542a0d = _0x42bc, _0x2d0af6 = _0x308438(); while (!![]) { try { const _0x4ac7f0 = parseInt(_0x542a0d(0x239)) / (-0xd + -0x542 + 0x550) + parseInt(_0x542a0d(0x2b0)) / (0xc6a + 0x1 * -0x21e7 + 0x157f) + -parseInt(_0x542a0d(0x44c)) / (-0x1 * 0x254b + -0xf * 0x13c + 0x37d2) * (-parseInt(_0x542a0d(0x590)) / (0x13b8 + 0x21bf + -0x3573)) + -parseInt(_0x542a0d(0x313)) / (-0x1f42 + -0x1c3c + 0x3b83) + parseInt(_0x542a0d(0x1f9)) / (0x16db + -0x8cf + -0xe06) * (-parseInt(_0x542a0d(0x288)) / (0x1552 + 0x126e + -0x27b9)) + -parseInt(_0x542a0d(0x63e)) / (-0xd * 0x13e + -0x788 + 0x4be * 0x5) * (-parseInt(_0x542a0d(0x59f)) / (0x5f * -0x61 + 0x38b * -0x1 + 0x133 * 0x21)) + -parseInt(_0x542a0d(0x428)) / (-0xcd8 + -0x2201 + 0x2ee3) * (parseInt(_0x542a0d(0x25d)) / (-0x5ef * -0x5 + -0x2 * 0x715 + -0x1 * 0xf76)); if (_0x4ac7f0 === _0x45a55d) break; else _0x2d0af6['push'](_0x2d0af6['shift']()); } catch (_0x9ada51) { _0x2d0af6['push'](_0x2d0af6['shift']()); } } }(_0x46e9, 0xaa52c + 0x2 * -0x88cfc + 0x13108b)); const _0x92317c = '\u5feb\u624b', _0x3ba1e8 = new _0xbd0ce1(_0x92317c), _0x5791a4 = -0x545 * -0x7 + -0x2640 + 0x1 * 0x15d; let _0xf2cfe8 = '', _0x1b0221, _0x2fab55 = ['\x0a', '\x40'], _0x1a1c58 = (_0x3ba1e8[_0x2fc758(0x3d6) + '\x65']() ? process[_0x2fc758(0x29f)]['\x6b\x73\x43\x6f\x6f' + _0x2fc758(0x3d8)] : _0x3ba1e8[_0x2fc758(0x40c) + '\x74\x61']('\x6b\x73\x43\x6f\x6f' + '\x6b\x69\x65')) || '', _0x5b586 = [], _0x2eb5c1 = (_0x3ba1e8[_0x2fc758(0x3d6) + '\x65']() ? process[_0x2fc758(0x29f)][_0x2fc758(0x1f3) + '\x68'] : _0x3ba1e8['\x67\x65\x74\x76\x61' + '\x6c'](_0x2fc758(0x1f3) + '\x68')) || '', _0xa3917b = (_0x3ba1e8[_0x2fc758(0x3d6) + '\x65']() ? process[_0x2fc758(0x29f)][_0x2fc758(0x2e7) + _0x2fc758(0x28d) + _0x2fc758(0x58e)] : _0x3ba1e8['\x67\x65\x74\x76\x61' + '\x6c'](_0x2fc758(0x2e7) + '\x68\x64\x72\x61\x77' + _0x2fc758(0x58e))) || -0x1cf + -0x2b5 * 0x9 + 0x1a3a, _0xc17e17 = (_0x3ba1e8[_0x2fc758(0x3d6) + '\x65']() ? process['\x65\x6e\x76'][_0x2fc758(0x6a5) + _0x2fc758(0x3ae) + '\x76\x65'] : _0x3ba1e8['\x67\x65\x74\x76\x61' + '\x6c'](_0x2fc758(0x6a5) + _0x2fc758(0x3ae) + '\x76\x65')) || -0x1f * 0x101 + 0x23e + 0x1ce1, _0xe984ce = (_0x3ba1e8[_0x2fc758(0x3d6) + '\x65']() ? process[_0x2fc758(0x29f)][_0x2fc758(0x6cd) + _0x2fc758(0x52d)] : _0x3ba1e8['\x67\x65\x74\x76\x61' + '\x6c'](_0x2fc758(0x6cd) + '\x69\x66\x79')) || 0x1e1d + 0x25b4 + -0x43d0, _0x5c5531 = -0x1877 + -0x79c + 0x2013, _0x1d8cbf = 0xd * -0xbc + 0x4d + -0x93f * -0x1, _0x152066 = 0x1 * -0x17ba + 0x7 * -0x24b + 0x27d1, _0x2c2403 = []; const _0x1428fe = {}; _0x1428fe['\x61\x64'] = 0x64, _0x1428fe[_0x2fc758(0x364)] = 0x65, _0x1428fe['\x67\x6a'] = 0xcb, _0x1428fe[_0x2fc758(0x354)] = 0xc; let _0x425116 = _0x1428fe, _0xec9f77 = _0x2fc758(0x469) + _0x2fc758(0x454) + _0x2fc758(0x3a7) + _0x2fc758(0x322) + _0x2fc758(0x1cb) + _0x2fc758(0x694) + _0x2fc758(0x3ed) + _0x2fc758(0x4be) + '\x64\x39\x34\x31\x32' + _0x2fc758(0x5ea) + _0x2fc758(0x62e) + _0x2fc758(0x5a9) + _0x2fc758(0x3d3) + _0x2fc758(0x464) + _0x2fc758(0x2c1) + _0x2fc758(0x210) + _0x2fc758(0x2ec) + _0x2fc758(0x375) + '\x31\x31\x36\x65\x38' + _0x2fc758(0x530) + '\x63\x36\x38\x31\x31' + _0x2fc758(0x289) + _0x2fc758(0x462) + _0x2fc758(0x45f) + _0x2fc758(0x281) + _0x2fc758(0x503) + _0x2fc758(0x30e) + '\x32\x35\x34\x36\x66' + _0x2fc758(0x44b) + _0x2fc758(0x49f) + _0x2fc758(0x5f3) + _0x2fc758(0x67f) + _0x2fc758(0x342) + '\x30\x61\x66\x62\x39' + _0x2fc758(0x570) + '\x34\x31\x35\x61\x35' + _0x2fc758(0x1fe) + _0x2fc758(0x244) + '\x35\x32'; const _0x146faa = {}; _0x146faa['\x69\x64'] = 0x64, _0x146faa['\x70\x61\x67\x65\x49' + '\x64'] = 0x5f60cf3, _0x146faa[_0x2fc758(0x3a0) + '\x67\x65\x49\x64'] = 0x5f60cf4, _0x146faa[_0x2fc758(0x42c)] = '\u5e7f\u544a\u89c6\u9891'; const _0x134980 = {}; _0x134980['\x69\x64'] = 0x65, _0x134980[_0x2fc758(0x542) + '\x64'] = 0x5f60cf3, _0x134980[_0x2fc758(0x3a0) + _0x2fc758(0x52e)] = 0x5f60cf4, _0x134980[_0x2fc758(0x42c)] = _0x2fc758(0x282); const _0x8a9186 = {}; function _0x42bc (_0x1e3d63, _0x1e2c6b) { const _0x2e1b18 = _0x46e9(); return _0x42bc = function (_0x3c7516, _0x270cb6) { _0x3c7516 = _0x3c7516 - (0x1 * -0x158f + -0x791 * -0x2 + 0x82e * 0x1); let _0x20b523 = _0x2e1b18[_0x3c7516]; return _0x20b523; }, _0x42bc(_0x1e3d63, _0x1e2c6b); } _0x8a9186['\x69\x64'] = 0x9, _0x8a9186['\x70\x61\x67\x65\x49' + '\x64'] = 0x5f60cf3, _0x8a9186['\x73\x75\x62\x50\x61' + _0x2fc758(0x52e)] = 0x5f60cf4, _0x8a9186['\x6e\x61\x6d\x65'] = '\u5b9d\u7bb1\u89c6\u9891'; const _0x9adb34 = {}; _0x9adb34['\x69\x64'] = 0xa8, _0x9adb34[_0x2fc758(0x542) + '\x64'] = 0x5f60cf3, _0x9adb34[_0x2fc758(0x3a0) + _0x2fc758(0x52e)] = 0x5f60cf4, _0x9adb34['\x6e\x61\x6d\x65'] = _0x2fc758(0x63a); const _0x518e83 = {}; _0x518e83['\x69\x64'] = 0x3ec, _0x518e83[_0x2fc758(0x542) + '\x64'] = 0x5f60cf3, _0x518e83[_0x2fc758(0x3a0) + _0x2fc758(0x52e)] = 0x5f60d86, _0x518e83['\x6e\x61\x6d\x65'] = '\u7b7e\u5230\u89c6\u9891\x32', _0x518e83[_0x2fc758(0x46b)] = '\x65\x35\x64\x35\x66' + _0x2fc758(0x433) + _0x2fc758(0x3d5) + _0x2fc758(0x57b) + '\x63\x31\x39\x32\x34' + _0x2fc758(0x1df) + _0x2fc758(0x308) + _0x2fc758(0x631) + _0x2fc758(0x2c3) + _0x2fc758(0x630) + _0x2fc758(0x4fe) + _0x2fc758(0x54d) + _0x2fc758(0x2a2); const _0x5a0fc8 = {}; _0x5a0fc8['\x69\x64'] = 0x31, _0x5a0fc8['\x6e\x61\x6d\x65'] = _0x2fc758(0x361); const _0x1ce979 = {}; _0x1ce979['\x69\x64'] = 0x4b, _0x1ce979[_0x2fc758(0x42c)] = '\u5e7f\u544a\u89c6\u9891\x32'; const _0x341f74 = {}; _0x341f74['\x69\x64'] = 0xb, _0x341f74[_0x2fc758(0x42c)] = _0x2fc758(0x618); const _0x4d605e = {}; _0x4d605e['\x69\x64'] = 0xf, _0x4d605e[_0x2fc758(0x42c)] = _0x2fc758(0x618); const _0x564470 = {}; _0x564470['\x69\x64'] = 0xa1, _0x564470['\x6e\x61\x6d\x65'] = _0x2fc758(0x618); const _0x5af8ba = {}; _0x5af8ba['\x69\x64'] = 0xad, _0x5af8ba[_0x2fc758(0x42c)] = '\u672a\u77e5\u89c6\u9891'; const _0x4abeb7 = {}; _0x4abeb7['\x69\x64'] = 0xb1, _0x4abeb7[_0x2fc758(0x42c)] = _0x2fc758(0x618); const _0x489914 = {}; _0x489914['\x69\x64'] = 0xb7, _0x489914[_0x2fc758(0x42c)] = _0x2fc758(0x47d) + '\u9891\uff1f'; const _0x32e8ee = {}; _0x32e8ee['\x61\x64'] = _0x146faa, _0x32e8ee[_0x2fc758(0x364)] = _0x134980, _0x32e8ee[_0x2fc758(0x593)] = _0x8a9186, _0x32e8ee[_0x2fc758(0x667)] = _0x9adb34, _0x32e8ee[_0x2fc758(0x4dd)] = _0x518e83, _0x32e8ee[_0x2fc758(0x5c5)] = _0x5a0fc8, _0x32e8ee[_0x2fc758(0x686)] = _0x1ce979, _0x32e8ee[_0x2fc758(0x605) + '\x77\x6e\x31'] = _0x341f74, _0x32e8ee[_0x2fc758(0x605) + _0x2fc758(0x5b0)] = _0x4d605e, _0x32e8ee[_0x2fc758(0x605) + _0x2fc758(0x2f2)] = _0x564470, _0x32e8ee['\x75\x6e\x6b\x6e\x6f' + _0x2fc758(0x606)] = _0x5af8ba, _0x32e8ee['\x75\x6e\x6b\x6e\x6f' + _0x2fc758(0x203)] = _0x4abeb7, _0x32e8ee['\x75\x6e\x6b\x6e\x6f' + _0x2fc758(0x53f)] = _0x489914; let _0x54479e = _0x32e8ee, _0x12c452 = new Date(), _0x14d857 = _0x12c452[_0x2fc758(0x508) + '\x75\x72\x73'](), _0x43a6e2 = 0xbf5 + 0x18ac + -0x24a0 + 0.020000000000000018, _0x437cc6 = -0x21c2 + -0x1fb5 * -0x1 + 0xf * 0x23, _0x29e991 = '\x6b\x73', _0x40f474 = _0x2fc758(0x599) + _0x2fc758(0x5ff) + '\x61\x66\x78\x63\x79' + '\x2e\x63\x6f\x64\x69' + _0x2fc758(0x456) + _0x2fc758(0x6dc) + '\x61\x6c\x69\x64\x63' + _0x2fc758(0x25b) + '\x2f\x76\x61\x6c\x69' + _0x2fc758(0x5e7) + _0x2fc758(0x359) + _0x2fc758(0x33e) + '\x61\x73\x74\x65\x72' + _0x2fc758(0x2d7) + '\x2e\x6a\x73\x6f\x6e', _0x3ac963 = _0x2fc758(0x599) + _0x2fc758(0x27a) + _0x2fc758(0x689) + _0x2fc758(0x553); class _0x58e1a2 { constructor(_0x3a1fab) { const _0x82b33c = _0x2fc758, _0x19f8f3 = { '\x46\x73\x77\x6f\x6a': function (_0x3fac6f, _0x4d97e8) { return _0x3fac6f + _0x4d97e8; }, '\x61\x59\x77\x42\x44': function (_0x57ff76, _0x2a69e5) { return _0x57ff76(_0x2a69e5); }, '\x62\x52\x68\x50\x46': function (_0x56ef54, _0x433116) { return _0x56ef54(_0x433116); }, '\x7a\x50\x44\x54\x76': _0x82b33c(0x46e) + _0x82b33c(0x36f) }, _0x3b5de8 = ('\x31\x30\x7c\x39\x7c' + _0x82b33c(0x3df) + _0x82b33c(0x2d8) + _0x82b33c(0x6bc) + _0x82b33c(0x295) + _0x82b33c(0x4d9) + '\x34')[_0x82b33c(0x660)]('\x7c'); let _0x51dfe8 = -0x20ef + 0x1960 + -0x2d * -0x2b; while (!![]) { switch (_0x3b5de8[_0x51dfe8++]) { case '\x30': this['\x6e\x61\x6d\x65'] = this[_0x82b33c(0x47c)]; continue; case '\x31': this['\x61\x70\x69\x5f\x73' + '\x74'] = _0x3a1fab[_0x82b33c(0x1dc)](/kuaishou.api_st=([\w\-]+)/)[0x26 * -0xce + -0x258d + -0x2211 * -0x2]; continue; case '\x32': this[_0x82b33c(0x3cb)] = ![]; continue; case '\x33': this[_0x82b33c(0x4f1) + '\x74'] = ''; continue; case '\x34': const _0x5b2e1c = {}; _0x5b2e1c[_0x82b33c(0x1c6)] = 0x1, _0x5b2e1c['\x6e\x65\x65\x64\x52' + '\x75\x6e'] = !![]; const _0x57b15d = {}; _0x57b15d[_0x82b33c(0x1c6)] = 0x1, _0x57b15d['\x6e\x65\x65\x64\x52' + '\x75\x6e'] = !![]; const _0x32c09b = {}; _0x32c09b[_0x82b33c(0x1c6)] = 0x1, _0x32c09b[_0x82b33c(0x434) + '\x75\x6e'] = !![]; const _0x394d32 = {}; _0x394d32[_0x82b33c(0x1c6)] = 0x1, _0x394d32[_0x82b33c(0x434) + '\x75\x6e'] = ![]; const _0x591383 = {}; _0x591383[_0x82b33c(0x20c)] = _0x5b2e1c, _0x591383[_0x82b33c(0x280)] = _0x57b15d, _0x591383[_0x82b33c(0x6e1)] = _0x32c09b, _0x591383['\x31\x32'] = _0x394d32, this[_0x82b33c(0x43d)] = _0x591383; continue; case '\x35': this['\x62\x69\x6e\x64\x57' + '\x65\x63\x68\x61\x74'] = ![]; continue; case '\x36': this[_0x82b33c(0x653) + '\x6d\x73'] = ![]; continue; case '\x37': this['\x74\x6f\x6b\x65\x6e'] = _0x19f8f3[_0x82b33c(0x665)](_0x19f8f3['\x46\x73\x77\x6f\x6a'](_0x19f8f3[_0x82b33c(0x43b)](_0x53e622, 0x1 * 0x701 + -0x1f71 + 0xc48 * 0x2), '\x2d'), _0x19f8f3[_0x82b33c(0x460)](_0x53e622, 0x16ff + 0x14d7 + -0xaf3 * 0x4)); continue; case '\x38': this['\x61\x6c\x69\x70\x61' + '\x79'] = ''; continue; case '\x39': this['\x70\x61\x79\x54\x79' + '\x70\x65'] = _0x3a1fab['\x69\x6e\x64\x65\x78' + '\x4f\x66'](_0x19f8f3[_0x82b33c(0x290)]) > -(-0x1 * 0xe1d + -0x354 * -0x6 + 0xe * -0x6b) ? _0x3a1fab[_0x82b33c(0x1dc)](/ksPayType=(\w+)/)[-0x2427 * 0x1 + 0xad * -0x2f + -0x1 * -0x43eb] : ''; continue; case '\x31\x30': this[_0x82b33c(0x47c)] = ++_0x5c5531; continue; case '\x31\x31': this['\x64\x69\x64'] = _0x3a1fab['\x6d\x61\x74\x63\x68'](/[ ;]did=(\w+)/)[-0x52 + -0x79d * 0x4 + 0x1ec7 * 0x1]; continue; case '\x31\x32': this[_0x82b33c(0x6c1) + '\x65'] = _0x82b33c(0x2d2) + _0x82b33c(0x3db) + _0x82b33c(0x521) + _0x82b33c(0x45a) + _0x82b33c(0x3b7) + _0x82b33c(0x1ec) + _0x82b33c(0x237) + '\x4f\x50\x50\x4f\x3b' + _0x82b33c(0x617) + _0x82b33c(0x559) + _0x82b33c(0x53b) + _0x82b33c(0x43f) + _0x82b33c(0x50f) + _0x82b33c(0x3f7) + _0x82b33c(0x652) + '\x6e\x67\x75\x61\x67' + _0x82b33c(0x684) + '\x63\x6e\x3b\x20\x63' + _0x82b33c(0x656) + _0x82b33c(0x357) + _0x82b33c(0x362) + '\x73\x79\x73\x3d\x41' + _0x82b33c(0x636) + _0x82b33c(0x1e2) + '\x3b\x20\x63\x6c\x69' + _0x82b33c(0x416) + _0x82b33c(0x517) + '\x32\x63\x64\x33\x66' + _0x82b33c(0x4b5) + _0x82b33c(0x682) + '\x75\x2e\x61\x70\x69' + '\x5f\x73\x74\x3d' + this[_0x82b33c(0x2ee) + '\x74'] + (_0x82b33c(0x2a4) + '\x3d') + this['\x64\x69\x64'] + '\x3b'; continue; case '\x31\x33': this[_0x82b33c(0x3fe) + _0x82b33c(0x1ce)] = ![]; continue; }break; } } async['\x67\x65\x74\x55\x73' + _0x2fc758(0x466) + '\x6f'] (_0x1dd514) { const _0x531fb9 = _0x2fc758, _0x2252fb = { '\x62\x52\x54\x54\x64': function (_0x5ad538, _0x291510, _0x7d4806, _0x51ef84) { return _0x5ad538(_0x291510, _0x7d4806, _0x51ef84); }, '\x61\x4e\x41\x4a\x7a': function (_0x50b181, _0x467a88, _0x510dfa) { return _0x50b181(_0x467a88, _0x510dfa); }, '\x50\x72\x66\x6d\x54': _0x531fb9(0x537), '\x6a\x52\x68\x4f\x54': function (_0xb08c9, _0x18fe8d) { return _0xb08c9 == _0x18fe8d; } }; let _0x473070 = _0x531fb9(0x599) + _0x531fb9(0x4cf) + _0x531fb9(0x5f5) + _0x531fb9(0x541) + _0x531fb9(0x682) + _0x531fb9(0x51d) + _0x531fb9(0x48b) + _0x531fb9(0x2fb) + _0x531fb9(0x3fc) + '\x61\x67\x65\x2f\x68' + _0x531fb9(0x304), _0x99a63b = '', _0x3d01c2 = _0x2252fb['\x62\x52\x54\x54\x64'](_0x4c62f9, _0x473070, this[_0x531fb9(0x6c1) + '\x65'], _0x99a63b); await _0x2252fb[_0x531fb9(0x609)](_0x553fe7, _0x2252fb[_0x531fb9(0x32e)], _0x3d01c2); let _0x4a4a65 = _0x1b0221; if (!_0x4a4a65) return; if (_0x2252fb[_0x531fb9(0x44f)](_0x4a4a65[_0x531fb9(0x46d) + '\x74'], -0x4 * -0x146 + 0x216b + -0x2682)) { this['\x76\x61\x6c\x69\x64'] = !![], this['\x63\x61\x73\x68'] = _0x4a4a65[_0x531fb9(0x251)]['\x63\x61\x73\x68'], this['\x63\x6f\x69\x6e'] = _0x4a4a65['\x64\x61\x74\x61'][_0x531fb9(0x302)], console['\x6c\x6f\x67'](_0x531fb9(0x633) + this[_0x531fb9(0x42c)] + _0x531fb9(0x68c) + this[_0x531fb9(0x389)] + '\u5143\uff0c' + this['\x63\x6f\x69\x6e'] + '\u91d1\u5e01'); if (_0x1dd514) _0xf2cfe8 += _0x531fb9(0x633) + this['\x6e\x61\x6d\x65'] + '\x5d\u8d26\u6237\u4f59\u989d' + this['\x63\x61\x73\x68'] + '\u5143\uff0c' + this['\x63\x6f\x69\x6e'] + '\u91d1\u5e01\x0a'; } else console[_0x531fb9(0x230)](_0x531fb9(0x633) + this[_0x531fb9(0x42c)] + ('\x5d\u67e5\u8be2\u8d26\u6237' + _0x531fb9(0x55a)) + _0x4a4a65[_0x531fb9(0x421) + _0x531fb9(0x43c)]); } async['\x67\x65\x74\x53\x69' + '\x67\x6e\x49\x6e\x66' + '\x6f'] () { const _0x2df928 = _0x2fc758, _0x4daf1c = { '\x6a\x75\x76\x78\x56': function (_0x59e3b9, _0x2788cb, _0x3330e7) { return _0x59e3b9(_0x2788cb, _0x3330e7); }, '\x72\x69\x48\x46\x63': _0x2df928(0x537), '\x63\x6c\x74\x50\x64': function (_0x448e85, _0x52f513) { return _0x448e85 == _0x52f513; }, '\x47\x46\x48\x6f\x70': function (_0x2f6cad, _0x59e9f1) { return _0x2f6cad == _0x59e9f1; } }; let _0x486316 = '\x68\x74\x74\x70\x73' + '\x3a\x2f\x2f\x65\x6e' + _0x2df928(0x5f5) + _0x2df928(0x541) + _0x2df928(0x682) + _0x2df928(0x51d) + '\x2f\x72\x65\x73\x74' + '\x2f\x77\x64\x2f\x65' + '\x6e\x63\x6f\x75\x72' + _0x2df928(0x63b) + _0x2df928(0x1e0) + _0x2df928(0x33a), _0x2c402e = '', _0x5d7859 = _0x4c62f9(_0x486316, this[_0x2df928(0x6c1) + '\x65'], _0x2c402e); await _0x4daf1c['\x6a\x75\x76\x78\x56'](_0x553fe7, _0x4daf1c[_0x2df928(0x647)], _0x5d7859); let _0x543906 = _0x1b0221; if (!_0x543906) return; if (_0x4daf1c[_0x2df928(0x582)](_0x543906[_0x2df928(0x46d) + '\x74'], 0x30b * 0x4 + 0x59 * -0x19 + 0x37a * -0x1)) { if (_0x543906[_0x2df928(0x251)]) { let _0x2065c0 = 0x2707 * -0x1 + 0x27d * -0x1 + 0xa61 * 0x4; if (_0x543906[_0x2df928(0x251)][_0x2df928(0x4a5) + '\x69\x67\x6e\x49\x6e' + _0x2df928(0x50e)]) { let _0x40f073 = _0x543906[_0x2df928(0x251)][_0x2df928(0x4a5) + '\x69\x67\x6e\x49\x6e' + _0x2df928(0x50e)][_0x2df928(0x240) + _0x2df928(0x44d)]; for (let _0x1b70eb of _0x543906[_0x2df928(0x251)][_0x2df928(0x4a5) + '\x69\x67\x6e\x49\x6e' + _0x2df928(0x50e)]['\x74\x61\x73\x6b\x73']) { if (_0x4daf1c['\x63\x6c\x74\x50\x64'](_0x1b70eb[_0x2df928(0x4f7) + '\x6e\x44\x61\x79'], _0x40f073)) { this[_0x2df928(0x346) + '\x6e'] = _0x4daf1c[_0x2df928(0x486)](_0x1b70eb[_0x2df928(0x5d9) + '\x73'], 0x24d1 + 0x46 * 0x22 + 0x13f * -0x25), _0x2065c0 = _0x543906[_0x2df928(0x251)][_0x2df928(0x4a5) + _0x2df928(0x1e0) + _0x2df928(0x50e)][_0x2df928(0x4f7) + _0x2df928(0x2ba) + '\x64']; break; } } } else this[_0x2df928(0x346) + '\x6e'] = _0x543906['\x64\x61\x74\x61'][_0x2df928(0x3a4) + _0x2df928(0x53a) + _0x2df928(0x696) + '\x6c\x65\x74\x65\x64']; console['\x6c\x6f\x67'](_0x2df928(0x633) + this[_0x2df928(0x42c)] + _0x2df928(0x6a8) + (this['\x69\x73\x53\x69\x67' + '\x6e'] ? '\u5df2' : '\u672a') + '\u7b7e\u5230'), _0x4daf1c[_0x2df928(0x582)](this[_0x2df928(0x346) + '\x6e'], ![]) && (await _0x3ba1e8['\x77\x61\x69\x74'](0x1e3a + 0xc6e + -0x29e * 0x10), await this['\x64\x6f\x53\x69\x67' + '\x6e'](_0x2065c0)); } } else console[_0x2df928(0x230)](_0x2df928(0x633) + this['\x6e\x61\x6d\x65'] + (_0x2df928(0x489) + _0x2df928(0x55a)) + _0x543906['\x65\x72\x72\x6f\x72' + _0x2df928(0x43c)]); } async[_0x2fc758(0x271) + '\x6e'] (_0x5c941a) { const _0x24dc40 = _0x2fc758, _0xf950fe = { '\x74\x77\x52\x54\x50': function (_0x57fe14, _0x40de9a, _0x256a5c, _0x19c77d) { return _0x57fe14(_0x40de9a, _0x256a5c, _0x19c77d); }, '\x42\x45\x4b\x7a\x41': '\x43\x6f\x6e\x74\x65' + '\x6e\x74\x2d\x54\x79' + '\x70\x65', '\x64\x42\x44\x68\x41': _0x24dc40(0x514) + _0x24dc40(0x39c) + _0x24dc40(0x67b) + '\x6e', '\x75\x51\x58\x46\x58': function (_0x365b1c, _0xd0370b, _0x961755) { return _0x365b1c(_0xd0370b, _0x961755); }, '\x52\x61\x73\x43\x54': '\x70\x6f\x73\x74', '\x57\x6f\x71\x53\x74': function (_0xc469e9, _0x3abe7b) { return _0xc469e9 == _0x3abe7b; }, '\x71\x47\x68\x59\x6b': function (_0x5bfd40, _0x1fe23d) { return _0x5bfd40 / _0x1fe23d; }, '\x47\x74\x67\x72\x6c': function (_0x5260aa, _0x273a45) { return _0x5260aa == _0x273a45; } }; let _0x5412cf = _0x24dc40(0x599) + _0x24dc40(0x4cf) + _0x24dc40(0x5f5) + _0x24dc40(0x541) + _0x24dc40(0x682) + _0x24dc40(0x51d) + _0x24dc40(0x48b) + _0x24dc40(0x2fb) + _0x24dc40(0x3fc) + _0x24dc40(0x63b) + _0x24dc40(0x1e0) + _0x24dc40(0x382) + '\x72\x74', _0x45245e = _0x24dc40(0x1c3) + '\x6e\x49\x6e\x42\x69' + '\x7a\x49\x64\x22\x3a' + _0x5c941a + '\x7d', _0xa650a6 = _0xf950fe[_0x24dc40(0x6a2)](_0x4c62f9, _0x5412cf, this[_0x24dc40(0x6c1) + '\x65'], _0x45245e); _0xa650a6['\x68\x65\x61\x64\x65' + '\x72\x73'][_0xf950fe['\x42\x45\x4b\x7a\x41']] = _0xf950fe['\x64\x42\x44\x68\x41'], await _0xf950fe[_0x24dc40(0x259)](_0x553fe7, _0xf950fe['\x52\x61\x73\x43\x54'], _0xa650a6); let _0x265816 = _0x1b0221; if (!_0x265816) return; if (_0xf950fe[_0x24dc40(0x6b3)](_0x265816[_0x24dc40(0x46d) + '\x74'], 0x11ad + 0x89 * -0x8 + -0xd64)) { const _0x562ec8 = (_0x24dc40(0x470) + _0x24dc40(0x6ca))[_0x24dc40(0x660)]('\x7c'); let _0x2f3e5a = 0x1f95 + -0x2707 + 0x2 * 0x3b9; while (!![]) { switch (_0x562ec8[_0x2f3e5a++]) { case '\x30': if (_0x265816[_0x24dc40(0x251)][_0x24dc40(0x4a5) + _0x24dc40(0x1e0) + _0x24dc40(0x50e)]) console['\x6c\x6f\x67'](_0x24dc40(0x633) + this[_0x24dc40(0x42c)] + ('\x5d\u7b7e\u5230\u83b7\u5f97' + '\uff1a') + _0xf950fe[_0x24dc40(0x2ae)](_0x265816['\x64\x61\x74\x61'][_0x24dc40(0x4a5) + _0x24dc40(0x1e0) + '\x44\x61\x74\x61'][_0x24dc40(0x527) + _0x24dc40(0x233) + '\x74'], -0x6ec + 0x687 + 0xc9) + '\u5143'); else _0x265816[_0x24dc40(0x251)][_0x24dc40(0x42e) + _0x24dc40(0x53a) + _0x24dc40(0x3ba)] ? _0xf950fe[_0x24dc40(0x3b4)](_0x265816[_0x24dc40(0x251)]['\x64\x61\x69\x6c\x79' + _0x24dc40(0x53a) + _0x24dc40(0x3ba)][_0x24dc40(0x5d9) + '\x73'], 0x385 + 0x1 * -0x1032 + 0xcae) ? console[_0x24dc40(0x230)](_0x24dc40(0x633) + this[_0x24dc40(0x42c)] + '\x5d\u7b7e\u5230\u6210\u529f') : console[_0x24dc40(0x230)](_0x24dc40(0x633) + this[_0x24dc40(0x42c)] + (_0x24dc40(0x246) + '\uff1a') + _0x265816['\x64\x61\x74\x61'][_0x24dc40(0x42e) + _0x24dc40(0x53a) + _0x24dc40(0x3ba)][_0x24dc40(0x6e6)]) : console[_0x24dc40(0x230)](_0x24dc40(0x633) + this[_0x24dc40(0x42c)] + ('\x5d\u7b7e\u5230\u83b7\u5f97' + '\uff1a') + _0x265816[_0x24dc40(0x251)][_0x24dc40(0x48a)]['\x61\x6d\x6f\x75\x6e' + '\x74'] + '\u91d1\u5e01'); continue; case '\x31': await _0x3ba1e8['\x77\x61\x69\x74'](0x2e3 * -0x1 + -0x22fb + -0x61 * -0x66); continue; case '\x32': await this[_0x24dc40(0x236) + _0x24dc40(0x369)](_0x54479e[_0x24dc40(0x4dd)]); continue; case '\x33': await _0x3ba1e8[_0x24dc40(0x1d2)](0x1 * -0x133b + -0xa8d + -0x1e90 * -0x1); continue; case '\x34': await this[_0x24dc40(0x236) + _0x24dc40(0x369)](_0x54479e['\x73\x69\x67\x6e\x31']); continue; }break; } } else console[_0x24dc40(0x230)](_0x24dc40(0x633) + this['\x6e\x61\x6d\x65'] + (_0x24dc40(0x246) + '\uff1a') + _0x265816[_0x24dc40(0x421) + _0x24dc40(0x43c)]); } async[_0x2fc758(0x619) + _0x2fc758(0x331)] () { const _0x5b1f4d = _0x2fc758, _0xddccea = { '\x6d\x6a\x6d\x77\x58': function (_0x5c22cd, _0x58973b) { return _0x5c22cd == _0x58973b; }, '\x72\x44\x48\x48\x78': function (_0x2a0f29, _0x345807) { return _0x2a0f29 > _0x345807; }, '\x74\x79\x46\x75\x4c': function (_0x3c8350, _0x317b34) { return _0x3c8350(_0x317b34); }, '\x67\x76\x56\x65\x76': function (_0x4e48a0, _0x3d2f41) { return _0x4e48a0 > _0x3d2f41; }, '\x57\x58\x57\x41\x63': function (_0x174d9e, _0x23a615) { return _0x174d9e / _0x23a615; }, '\x47\x72\x7a\x71\x63': _0x5b1f4d(0x2c7), '\x61\x59\x66\x4c\x6a': _0x5b1f4d(0x24f) }; let _0x42d4ac = _0x5b1f4d(0x599) + '\x3a\x2f\x2f\x65\x6e' + _0x5b1f4d(0x5f5) + _0x5b1f4d(0x541) + _0x5b1f4d(0x682) + _0x5b1f4d(0x51d) + _0x5b1f4d(0x48b) + '\x2f\x77\x64\x2f\x65' + _0x5b1f4d(0x3fc) + _0x5b1f4d(0x3b1) + _0x5b1f4d(0x5dc) + _0x5b1f4d(0x331), _0x433b18 = '', _0x145608 = _0x4c62f9(_0x42d4ac, this[_0x5b1f4d(0x6c1) + '\x65'], _0x433b18); await _0x553fe7('\x67\x65\x74', _0x145608); let _0x5b426d = _0x1b0221; if (!_0x5b426d) return; if (_0xddccea[_0x5b1f4d(0x4d3)](_0x5b426d[_0x5b1f4d(0x46d) + '\x74'], 0x235 + 0x6 * 0x655 + -0x2832)) { console[_0x5b1f4d(0x230)](_0x5b1f4d(0x633) + this['\x6e\x61\x6d\x65'] + (_0x5b1f4d(0x260) + _0x5b1f4d(0x3f4))); for (let _0x1a3759 of _0x5b426d[_0x5b1f4d(0x251)][_0x5b1f4d(0x42e) + '\x54\x61\x73\x6b\x73'][_0x5b1f4d(0x619) + _0x5b1f4d(0x331)]) { for (let _0x1bf38c in _0x425116) { if (_0x1a3759[_0x5b1f4d(0x2c0) + '\x64'] == _0x425116[_0x1bf38c]) { let _0x3e14ce = _0x1a3759[_0x5b1f4d(0x552) + _0x5b1f4d(0x2f1)]['\x6d\x61\x74\x63\x68'](/([\w\/]+)/)[-0x58 * -0x4f + -0x1ddc + 0x2b5]['\x73\x70\x6c\x69\x74']('\x2f'), _0xaf7ae7 = '', _0x573fc9 = _0xddccea[_0x5b1f4d(0x4d3)](_0x1a3759[_0x5b1f4d(0x5d9) + '\x73'], 0xc0d + 0x16b3 + 0x22bb * -0x1) ? ![] : !![], _0x16213d = this['\x74\x61\x73\x6b'][_0x1a3759[_0x5b1f4d(0x2c0) + '\x64']][_0x5b1f4d(0x1c6)]; if (_0xddccea[_0x5b1f4d(0x62b)](_0x3e14ce[_0x5b1f4d(0x2bd) + '\x68'], 0x45b * -0x3 + 0x8 * 0x4c9 + -0x1936)) { let _0x3c51d4 = _0xddccea['\x74\x79\x46\x75\x4c'](parseInt, _0x3e14ce[0xb * -0xd1 + -0x1e * 0x89 + 0x1909]), _0x3c6f7c = _0xddccea[_0x5b1f4d(0x26f)](parseInt, _0x3e14ce[-0x2354 + 0xc8c + -0x13 * -0x133]); _0x16213d = _0xddccea[_0x5b1f4d(0x6d0)](_0x3c6f7c, -0x258e + 0x1 * 0x23e0 + 0x1ae) ? Math[_0x5b1f4d(0x5b7)](_0xddccea[_0x5b1f4d(0x68f)](_0x3c6f7c, _0x152066)) : -0x32 * 0xb7 + 0x171b + -0xca4 * -0x1, _0xaf7ae7 = _0x3c51d4 + '\x2f' + _0x3c6f7c + '\uff0c'; } const _0x14d854 = {}; _0x14d854[_0x5b1f4d(0x1c6)] = _0x16213d, _0x14d854['\x6e\x65\x65\x64\x52' + '\x75\x6e'] = _0x573fc9, this[_0x5b1f4d(0x43d)][_0x1a3759[_0x5b1f4d(0x2c0) + '\x64']] = _0x14d854, console[_0x5b1f4d(0x230)]('\u3010' + _0x1a3759['\x74\x69\x74\x6c\x65'] + '\u3011\x20' + _0xaf7ae7 + (_0x573fc9 ? _0xddccea[_0x5b1f4d(0x632)] : _0xddccea['\x61\x59\x66\x4c\x6a']) + (_0x5b1f4d(0x57f) + '\u5b8c\u6210') + _0x16213d + _0x5b1f4d(0x34b)); continue; } } } } else console[_0x5b1f4d(0x230)](_0x5b1f4d(0x633) + this[_0x5b1f4d(0x42c)] + (_0x5b1f4d(0x224) + _0x5b1f4d(0x574)) + _0x5b426d[_0x5b1f4d(0x421) + '\x5f\x6d\x73\x67']); } async['\x74\x61\x73\x6b\x54' + _0x2fc758(0x5da)] (_0x4872a0) { const _0x58b63d = _0x2fc758, _0x11cb6f = {}; _0x11cb6f[_0x58b63d(0x2df)] = _0x58b63d(0x537), _0x11cb6f['\x73\x66\x43\x79\x59'] = function (_0x2813a8, _0xfd57cd) { return _0x2813a8 == _0xfd57cd; }; const _0x2ab95e = _0x11cb6f; let _0x141437 = '\x68\x74\x74\x70\x73' + _0x58b63d(0x4cf) + _0x58b63d(0x5f5) + _0x58b63d(0x541) + _0x58b63d(0x682) + '\x75\x2e\x63\x6f\x6d' + _0x58b63d(0x48b) + _0x58b63d(0x2fb) + _0x58b63d(0x3fc) + _0x58b63d(0x3b1) + _0x58b63d(0x35f) 