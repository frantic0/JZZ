!function(){function a(){this._orig=this,this._ready=!1,this._queue=[],this._err=[]}function b(a,b){setTimeout(function(){a._resume()},b)}function c(a){a instanceof Function?a.apply(this):console.log(a)}function d(a){a instanceof Function?a.apply(this):console.log(a)}function e(a){if(!a.length)return void this._break();var b=a.shift();if(a.length){var c=this;this._slip(d,[function(){e.apply(c,[a])}])}try{this._repair(),b.apply(this)}catch(f){this._break(f.toString())}}function f(a,b){for(var c in a)if(a[c]===b)return;a.push(b)}function g(a,b){for(var c in a)if(a[c]===b)return void a.splice(c,1)}function h(){a.apply(this)}function i(){h.prototype._time||(h.prototype._time=function(){return Date.now()}),h.prototype._startTime=h.prototype._time(),h.prototype.time=function(){return h.prototype._time()-h.prototype._startTime}}function j(a){if(a instanceof Object){var b=a instanceof Array?[]:{};for(var c in a)b[c]=j(a[c]);return b}return a}function k(){this._info.engine=X._type,this._info.version=X._version,this._info.inputs=[],this._info.outputs=[],U=[],V=[],X._allOuts={},X._allIns={};var a,b;for(a=0;a<X._outs.length;a++)b=X._outs[a],b.engine=X,X._allOuts[b.name]=b,this._info.outputs.push({name:b.name,manufacturer:b.manufacturer,version:b.version,engine:X._type}),U.push(b);for(a=0;a<Y._outs.length;a++)b=Y._outs[a],this._info.outputs.push({name:b.name,manufacturer:b.manufacturer,version:b.version,engine:b.type}),U.push(b);for(a=0;a<X._ins.length;a++)b=X._ins[a],b.engine=X,X._allIns[b.name]=b,this._info.inputs.push({name:b.name,manufacturer:b.manufacturer,version:b.version,engine:X._type}),V.push(b);for(a=0;a<Y._ins.length;a++)b=Y._ins[a],this._info.inputs.push({name:b.name,manufacturer:b.manufacturer,version:b.version,engine:b.type}),V.push(b)}function l(){this._slip(k,[]),X._refresh()}function m(a,b){if(void 0===a)return b.slice();var c,d,e=[];if(a instanceof RegExp){for(d=0;d<b.length;d++)a.test(b[d].name)&&e.push(b[d]);return e}for(a instanceof Function&&(a=a(b)),a instanceof Array||(a=[a]),c=0;c<a.length;c++)for(d=0;d<b.length;d++)(a[c]+""==d+""||a[c]===b[d].name||a[c]instanceof Object&&a[c].name===b[d].name)&&e.push(b[d]);return e}function n(a,b){var c;c=b instanceof RegExp?"Port matching "+b+" not found":b instanceof Object||void 0===b?"Port not found":'Port "'+b+'" not found',a._crash(c)}function o(a,b){function c(a){return function(){a.engine._openOut(this,a.name)}}var d=m(b,U);if(!d.length)return void n(a,b);for(var f=0;f<d.length;f++)d[f]=c(d[f]);a._slip(e,[d]),a._resume()}function p(a,b){function c(a){return function(){a.engine._openIn(this,a.name)}}var d=m(b,V);if(!d.length)return void n(a,b);for(var f=0;f<d.length;f++)d[f]=c(d[f]);a._slip(e,[d]),a._resume()}function q(a){X._close(),this._break(),a._resume()}function r(){a.apply(this)}function s(a){this._impl._close&&this._impl._close(this),this._break("closed"),a._resume()}function t(a){this._impl._send(a)}function u(){a.apply(this),this._handles=[],this._outs=[]}function v(a){a instanceof Function?f(this._orig._handles,a):f(this._orig._outs,a)}function w(a){a instanceof Function?g(this._orig._handles,a):g(this._orig._outs,a)}function x(a){this._impl._close&&this._impl._close(this),this._break(),a._resume()}function y(){return"undefined"!=typeof module&&module.exports?void H(require("jazz-midi")):void this._break()}function z(){var a=document.createElement("div");a.style.visibility="hidden",document.body.appendChild(a);var b=document.createElement("object");return b.style.visibility="hidden",b.style.width="0px",b.style.height="0px",b.classid="CLSID:1ACE1618-1C7D-4561-AEE1-34842AA85E90",b.type="audio/x-jazz",document.body.appendChild(b),b.isJazz?void I(b):void this._break()}function A(){function a(a){J(a),c._resume()}function b(a){c._crash(a)}if(navigator.requestMIDIAccess){var c=this,d={};return this._options&&this._options.sysex===!0&&(d.sysex=!0),navigator.requestMIDIAccess(d).then(a,b),void this._pause()}this._break()}function B(){function a(e){if(b=!0,c||(c=document.getElementById("jazz-midi-msg")),c){var f=[];try{f=JSON.parse(c.innerText)}catch(e){}c.innerText="",document.removeEventListener("jazz-midi-msg",a),"version"===f[0]?(K(c,f[2]),d._resume()):d._crash()}}var b,c,d=this;this._pause(),document.addEventListener("jazz-midi-msg",a);try{document.dispatchEvent(new Event("jazz-midi"))}catch(e){}window.setTimeout(function(){b||d._crash()},0)}function C(){this._pause();var a=this;setTimeout(function(){a._crash()},0)}function D(a){if(!a||!a.engine)return[y,C,B,z,A,F];for(var b,c,d=a.engine instanceof Array?a.engine:[a.engine],e={},f=[],h=[],i={crx:B,npapi:z,webmidi:A},j=["crx","webmidi","npapi"],k=0;k<d.length;k++){var l=d[k].toString().toLowerCase();e[l]||(e[l]=!0,"none"===l&&(b=!0),"etc"===l&&(c=!0),i[l]&&(c?h.push(l):f.push(l),g(j,l)))}if((c||f.length||h.length)&&(b=!1),b)return[C,F];for(var m=[y,C],k=0;k<f.length;k++)m.push(i[f[k]]);if(c){for(var k=0;k<j.length;k++)m.push(i[j[k]]);for(var k=0;k<h.length;k++)m.push(i[h[k]])}return m.push(F),m}function E(a){W=new h,W._options=a,W._push(e,[D(a)]),W.refresh(),W._push(i,[]),W._push(function(){U.length||V.length||this._break()},[]),W._resume()}function F(){X._type="none",X._refresh=function(){X._outs=[],X._ins=[]}}function G(){X._inArr=[],X._outArr=[],X._inMap={},X._outMap={},X._version=X._main.version,X._refresh=function(){X._outs=[],X._ins=[];var a,b;for(a=0;(b=X._main.MidiOutInfo(a)).length;a++)X._outs.push({type:X._type,name:b[0],manufacturer:b[1],version:b[2]});for(a=0;(b=X._main.MidiInInfo(a)).length;a++)X._ins.push({type:X._type,name:b[0],manufacturer:b[1],version:b[2]})},X._openOut=function(a,b){var c=X._outMap[b];if(!c){X._pool.length<=X._outArr.length&&X._pool.push(X._newPlugin()),c={name:b,clients:[],info:{name:b,manufacturer:X._allOuts[b].manufacturer,version:X._allOuts[b].version,type:"MIDI-out",engine:X._type},_close:function(a){X._closeOut(a)},_send:function(a){this.plugin.MidiOutRaw(a.slice())}};var d=X._pool[X._outArr.length];c.plugin=d,X._outArr.push(c),X._outMap[b]=c}if(!c.open){var e=c.plugin.MidiOutOpen(b);if(e!==b)return e&&c.plugin.MidiOutClose(),void a._break();c.open=!0}a._orig._impl=c,f(c.clients,a._orig)},X._openIn=function(a,b){function c(a){return function(b,c){a.handle(b,c)}}var d=X._inMap[b];if(!d){X._pool.length<=X._inArr.length&&X._pool.push(X._newPlugin()),d={name:b,clients:[],info:{name:b,manufacturer:X._allIns[b].manufacturer,version:X._allIns[b].version,type:"MIDI-in",engine:X._type},_close:function(a){X._closeIn(a)},handle:function(a,b){for(var c in this.clients){var d=L(b);this.clients[c]._event(d)}}};var e=X._pool[X._inArr.length];d.plugin=e,X._inArr.push(d),X._inMap[b]=d}if(!d.open){var g=e.MidiInOpen(b,c(d));if(g!==b)return g&&e.MidiInClose(),void a._break();d.open=!0}a._orig._impl=d,f(d.clients,a._orig)},X._closeOut=function(a){var b=a._impl;g(b.clients,a._orig),b.clients.length||(b.open=!1,b.plugin.MidiOutClose())},X._closeIn=function(a){var b=a._impl;g(b.clients,a._orig),b.clients.length||(b.open=!1,b.plugin.MidiInClose())},X._close=function(){for(var a in X._inArr)X._inArr[a].open&&X._inArr[a].plugin.MidiInClose()},h.prototype._time=function(){return X._main.Time()}}function H(a){X._type="node",X._main=a,X._pool=[],X._newPlugin=function(){return new a.MIDI},G()}function I(a){X._type="plugin",X._main=a,X._pool=[a],X._newPlugin=function(){var b=document.createElement("object");return b.style.visibility="hidden",b.style.width="0px",a.style.height="0px",b.classid="CLSID:1ACE1618-1C7D-4561-AEE1-34842AA85E90",b.type="audio/x-jazz",document.body.appendChild(b),b.isJazz?b:void 0},G()}function J(a){X._type="webmidi",X._version=43,X._access=a,X._inMap={},X._outMap={},X._refresh=function(){X._outs=[],X._ins=[],X._access.outputs.forEach(function(a,b){X._outs.push({type:X._type,name:a.name,manufacturer:a.manufacturer,version:a.version})}),X._access.inputs.forEach(function(a,b){X._ins.push({type:X._type,name:a.name,manufacturer:a.manufacturer,version:a.version})})},X._openOut=function(a,b){var c=X._outMap[b];if(!c){c={name:b,clients:[],info:{name:b,manufacturer:X._allOuts[b].manufacturer,version:X._allOuts[b].version,engine:X._type},_close:function(a){X._closeOut(a)},_send:function(a){this.dev.send(a.slice())}};X._access.outputs.forEach(function(a,d){a.name===b&&(c.dev=a)}),c.dev?X._outMap[b]=c:c=void 0}c?(a._orig._impl=c,f(c.clients,a._orig)):a._break()},X._openIn=function(a,b){function c(a){return function(b){a.handle(b)}}var d=X._inMap[b];if(!d){d={name:b,clients:[],info:{name:b,manufacturer:X._allIns[b].manufacturer,version:X._allIns[b].version,engine:X._type},_close:function(a){X._closeIn(a)},handle:function(a){for(var b in this.clients){var c=L([].slice.call(a.data));this.clients[b]._event(c)}}};X._access.inputs.forEach(function(a,c){a.name===b&&(d.dev=a)}),d.dev?(d.dev.onmidimessage=c(d),X._inMap[b]=d):d=void 0}d?(a._orig._impl=d,f(d.clients,a._orig)):a._break()},X._closeOut=function(a){var b=a._impl;g(b.clients,a._orig)},X._closeIn=function(a){var b=a._impl;g(b.clients,a._orig)},X._close=function(){}}function K(a,b){X._type="crx",X._version=b,X._pool=[],X._inArr=[],X._outArr=[],X._inMap={},X._outMap={},X._msg=a,X._newPlugin=function(){var a={id:X._pool.length};a.id?document.dispatchEvent(new CustomEvent("jazz-midi",{detail:["new"]})):a.ready=!0,X._pool.push(a)},X._newPlugin(),X._refresh=function(){X._outs=[],X._ins=[],W._pause(),document.dispatchEvent(new CustomEvent("jazz-midi",{detail:["refresh"]}))},X._openOut=function(a,b){var c=X._outMap[b];if(!c){X._pool.length<=X._outArr.length&&X._newPlugin();var d=X._pool[X._outArr.length];c={name:b,clients:[],info:{name:b,manufacturer:X._allOuts[b].manufacturer,version:X._allOuts[b].version,type:"MIDI-out",engine:X._type},_start:function(){document.dispatchEvent(new CustomEvent("jazz-midi",{detail:["openout",d.id,b]}))},_close:function(a){X._closeOut(a)},_send:function(a){var b=a.slice();b.splice(0,0,"play",d.id),document.dispatchEvent(new CustomEvent("jazz-midi",{detail:b}))}},c.plugin=d,d.output=c,X._outArr.push(c),X._outMap[b]=c,d.ready&&c._start()}a._orig._impl=c,f(c.clients,a._orig),c.open||a._pause()},X._openIn=function(a,b){var c=X._inMap[b];if(!c){X._pool.length<=X._inArr.length&&X._newPlugin();var d=X._pool[X._inArr.length];c={name:b,clients:[],info:{name:b,manufacturer:X._allIns[b].manufacturer,version:X._allIns[b].version,type:"MIDI-in",engine:X._type},_start:function(){document.dispatchEvent(new CustomEvent("jazz-midi",{detail:["openin",d.id,b]}))},_close:function(a){X._closeIn(a)}},c.plugin=d,d.input=c,X._inArr.push(c),X._inMap[b]=c,d.ready&&c._start()}a._orig._impl=c,f(c.clients,a._orig),c.open||a._pause()},X._closeOut=function(a){var b=a._impl;g(b.clients,a._orig),b.clients.length||(b.open=!1,document.dispatchEvent(new CustomEvent("jazz-midi",{detail:["closeout",b.plugin.id]})))},X._closeIn=function(a){var b=a._impl;g(b.clients,a._orig),b.clients.length||(b.open=!1,document.dispatchEvent(new CustomEvent("jazz-midi",{detail:["closein",b.plugin.id]})))},X._close=function(){},document.addEventListener("jazz-midi-msg",function(a){var b=X._msg.innerText.split("\n");X._msg.innerText="";for(var c=0;c<b.length;c++){var d=[];try{d=JSON.parse(b[c])}catch(a){}if(d.length)if("refresh"===d[0]){if(d[1].ins){for(var e=0;c<d[1].ins;c++)d[1].ins[e].type=X._type;X._ins=d[1].ins}if(d[1].outs){for(var e=0;c<d[1].outs;c++)d[1].outs[e].type=X._type;X._outs=d[1].outs}W._resume()}else if("version"===d[0]){var f=X._pool[d[1]];f&&(f.ready=!0,f.input&&f.input._start(),f.output&&f.output._start())}else if("openout"===d[0]){var g=X._pool[d[1]].output;if(g&&(g.open=!0,g.clients))for(var c=0;c<g.clients.length;c++)g.clients[c]._resume()}else if("openin"===d[0]){var g=X._pool[d[1]].input;if(g&&(g.open=!0,g.clients))for(var c=0;c<g.clients.length;c++)g.clients[c]._resume()}else if("midi"===d[0]){var g=X._pool[d[1]].input;if(g&&g.clients)for(var c=0;c<g.clients.length;c++){var h=L(d.slice(3));g.clients[c]._event(h)}}}})}function L(a){var b=this instanceof L?this:b=new L;if(!arguments.length)return b;for(var c=a instanceof Array?a:arguments,d=0;d<c.length;d++){var e=c[d];1==d&&b[0]>=128&&b[0]<=175&&(e=L.noteValue(e)),(e!=parseInt(e)||0>e||e>255)&&M(c[d]),b.push(e)}return b}function M(a){throw RangeError("Bad MIDI value: "+a)}function N(a){return(a!=parseInt(a)||0>a||a>15)&&M(a),a}function O(a){return(a!=parseInt(a)||0>a||a>127)&&M(a),a}function P(a){return(a!=parseInt(a)||0>a||a>16383)&&M(a),127&a}function Q(a){return(a!=parseInt(a)||0>a||a>16383)&&M(a),a>>7}function R(a,b){L[a]=function(){return new L(b.apply(0,arguments))},r.prototype[a]=function(){return this.send(b.apply(0,arguments)),this}}function S(a){for(var b=[],c=0;c<a.length;c++)b[c]=(a[c]<16?"0":"")+a[c].toString(16);return b.join(" ")}var T="0.2.5";a.prototype._exec=function(){for(;this._ready&&this._queue.length;){var a=this._queue.shift();this._orig._bad?this._orig._hope&&a[0]==d?(this._orig._hope=!1,a[0].apply(this,a[1])):(this._queue=[],this._orig._hope=!1):a[0]!=d&&a[0].apply(this,a[1])}},a.prototype._push=function(b,c){this._queue.push([b,c]),a.prototype._exec.apply(this)},a.prototype._slip=function(a,b){this._queue.unshift([a,b])},a.prototype._pause=function(){this._ready=!1},a.prototype._resume=function(){this._ready=!0,a.prototype._exec.apply(this)},a.prototype._break=function(a){this._orig._bad=!0,this._orig._hope=!0,a&&this._orig._err.push(a)},a.prototype._repair=function(){this._orig._bad=!1},a.prototype._crash=function(a){this._break(a),this._resume()},a.prototype.err=function(){return j(this._err)},a.prototype.wait=function(a){function c(){}if(!a)return this;c.prototype=this._orig;var d=new c;return d._ready=!1,d._queue=[],this._push(b,[d,a]),d},a.prototype.and=function(a){return this._push(c,[a]),this},a.prototype.or=function(a){return this._push(d,[a]),this},h.prototype=new a,h.prototype.time=function(){return 0},"undefined"!=typeof performance&&performance.now&&(h.prototype._time=function(){return performance.now()}),h.prototype._info={name:"JZZ.js",ver:T},h.prototype.info=function(){return j(this._info)};var U=[],V=[];h.prototype.refresh=function(){return this._push(l,[]),this},h.prototype.openMidiOut=function(a){var b=new r;return this._push(l,[]),this._push(o,[b,a]),b},h.prototype.openMidiIn=function(a){var b=new u;return this._push(l,[]),this._push(p,[b,a]),b},h.prototype.close=function(){var b=new a;return this._push(q,[b]),b},r.prototype=new a,r.prototype.name=function(){return this._impl?this._impl.name:void 0},r.prototype.info=function(){return this._impl?j(this._impl.info):{}},r.prototype.close=function(){var b=new a;return this._push(s,[b]),b},r.prototype.send=function(){return this._push(t,[L.apply(null,arguments)]),this},r.prototype.note=function(a,b,c,d){return this.noteOn(a,b,c),d&&this.wait(d).noteOff(a,b),this},u.prototype=new a,u.prototype.name=r.prototype.name,u.prototype.info=r.prototype.info,u.prototype._event=function(a){for(var b in this._handles)this._handles[b].apply(this,[a]);for(var b in this._outs)this._outs[b]._send(a)},u.prototype.connect=function(a){return this._push(v,[a]),this},u.prototype.disconnect=function(a){return this._push(w,[a]),this},u.prototype.close=function(){var b=new a;return this._push(x,[b]),b};var W,X={},Y={_outs:[],_ins:[]};JZZ=function(a){return W||E(a),W},JZZ.info=function(){return h.prototype.info()},L.prototype=[],L.prototype.constructor=L;var Z={};L.noteValue=function(a){return Z[a.toString().toLowerCase()]};var $={c:0,d:2,e:4,f:5,g:7,a:9,b:11,h:11};for(var _ in $)for(var aa=0;12>aa;aa++){var ba=$[_]+12*aa;if(ba>127)break;Z[_+aa]=ba,ba>0&&(Z[_+"b"+aa]=ba-1,Z[_+"bb"+aa]=ba-2),127>ba&&(Z[_+"#"+aa]=ba+1,Z[_+"##"+aa]=ba+2)}for(var aa=0;128>aa;aa++)Z[aa]=aa;var ca={noteOff:function(a,b){return[128+N(a),O(L.noteValue(b)),0]},noteOn:function(a,b,c){return[144+N(a),O(L.noteValue(b)),O(c)]},aftertouch:function(a,b,c){return[160+N(a),O(L.noteValue(b)),O(c)]},control:function(a,b,c){return[176+N(a),O(b),O(c)]},program:function(a,b){return[192+N(a),O(b)]},pressure:function(a,b){return[208+N(a),O(b)]},pitchBend:function(a,b){return[224+N(a),P(b),Q(b)]},bankMSB:function(a,b){return[176+N(a),0,O(b)]},bankLSB:function(a,b){return[176+N(a),32,O(b)]},modMSB:function(a,b){return[176+N(a),1,O(b)]},modLSB:function(a,b){return[176+N(a),33,O(b)]},breathMSB:function(a,b){return[176+N(a),2,O(b)]},breathLSB:function(a,b){return[176+N(a),34,O(b)]},footMSB:function(a,b){return[176+N(a),4,O(b)]},footLSB:function(a,b){return[176+N(a),36,O(b)]},portamentoMSB:function(a,b){return[176+N(a),5,O(b)]},portamentoLSB:function(a,b){return[176+N(a),37,O(b)]},volumeMSB:function(a,b){return[176+N(a),7,O(b)]},volumeLSB:function(a,b){return[176+N(a),39,O(b)]},balanceMSB:function(a,b){return[176+N(a),8,O(b)]},balanceLSB:function(a,b){return[176+N(a),40,O(b)]},panMSB:function(a,b){return[176+N(a),10,O(b)]},panLSB:function(a,b){return[176+N(a),42,O(b)]},expressionMSB:function(a,b){return[176+N(a),11,O(b)]},expressionLSB:function(a,b){return[176+N(a),43,O(b)]},damper:function(a,b){return[176+N(a),64,b?127:0]},portamento:function(a,b){return[176+N(a),65,b?127:0]},sostenuto:function(a,b){return[176+N(a),66,b?127:0]},soft:function(a,b){return[176+N(a),67,b?127:0]},allSoundOff:function(a){return[176+N(a),120,0]},allNotesOff:function(a){return[176+N(a),123,0]}};for(var _ in ca)R(_,ca[_]);L.prototype.toString=function(){if(!this.length)return"empty";var a=S(this);if(this[0]<128)return a;a+=" -- ";var b={241:"Time Code",242:"Song Position",243:"Song Select",244:"Undefined",245:"Undefined",246:"Tune request",248:"Timing clock",249:"Undefined",250:"Start",251:"Continue",252:"Stop",253:"Undefined",254:"Active Sensing",255:"Reset"}[this[0]];if(b)return a+b;var c=this[0]>>4;return(b={8:"Note Off",10:"Aftertouch",12:"Program Change",13:"Channel Aftertouch",14:"Pitch Wheel"}[c])?a+b:9==c?a+(this[2]?"Note On":"Note Off"):11!=c?a:(b={0:"Bank Select MSB",1:"Modulation Wheel MSB",2:"Breath Controller MSB",4:"Foot Controller MSB",5:"Portamento Time MSB",6:"Data Entry MSB",7:"Channel Volume MSB",8:"Balance MSB",10:"Pan MSB",11:"Expression Controller MSB",12:"Effect Control 1 MSB",13:"Effect Control 2 MSB",16:"General Purpose Controller 1 MSB",17:"General Purpose Controller 2 MSB",18:"General Purpose Controller 3 MSB",19:"General Purpose Controller 4 MSB",32:"Bank Select LSB",33:"Modulation Wheel LSB",34:"Breath Controller LSB",36:"Foot Controller LSB",37:"Portamento Time LSB",38:"Data Entry LSB",39:"Channel Volume LSB",40:"Balance LSB",42:"Pan LSB",43:"Expression Controller LSB",44:"Effect control 1 LSB",45:"Effect control 2 LSB",48:"General Purpose Controller 1 LSB",49:"General Purpose Controller 2 LSB",50:"General Purpose Controller 3 LSB",51:"General Purpose Controller 4 LSB",64:"Damper Pedal On/Off",65:"Portamento On/Off",66:"Sostenuto On/Off",67:"Soft Pedal On/Off",68:"Legato Footswitch",69:"Hold 2",70:"Sound Controller 1",71:"Sound Controller 2",72:"Sound Controller 3",73:"Sound Controller 4",74:"Sound Controller 5",75:"Sound Controller 6",76:"Sound Controller 7",77:"Sound Controller 8",78:"Sound Controller 9",79:"Sound Controller 10",80:"General Purpose Controller 5",81:"General Purpose Controller 6",82:"General Purpose Controller 7",83:"General Purpose Controller 8",84:"Portamento Control",88:"High Resolution Velocity Prefix",91:"Effects 1 Depth",92:"Effects 2 Depth",93:"Effects 3 Depth",94:"Effects 4 Depth",95:"Effects 5 Depth",96:"Data Increment",97:"Data Decrement",98:"Non-Registered Parameter Number LSB",99:"Non-Registered Parameter Number MSB",100:"Registered Parameter Number LSB",101:"Registered Parameter Number MSB",120:"All Sound Off",121:"Reset All Controllers",122:"Local Control On/Off",123:"All Notes Off",124:"Omni Mode Off",125:"Omni Mode On",126:"Mono Mode On",127:"Poly Mode On"}[this[1]],b||(b="Undefined"),a+b)},JZZ.MIDI=L,JZZ.lib={},JZZ.lib.openMidiOut=function(a,b){var c=new r;return b._openOut(c,a),c},JZZ.lib.openMidiIn=function(a,b){var c=new u;return b._openIn(c,a),c},JZZ.lib.registerMidiOut=function(a,b){var c=b._info(a);for(var d in Y._outs)if(Y._outs[d].name==c.name)return!1;return c.engine=b,Y._outs.push(c),W&&W._bad&&(W._repair(),W._resume()),!0},JZZ.lib.registerMidiIn=function(a,b){var c=b._info(a);for(var d in Y._ins)if(Y._ins[d].name==c.name)return!1;return c.engine=b,Y._ins.push(c),W&&W._bad&&(W._repair(),W._resume()),!0},JZZ.util={},JZZ.util.iosSound=function(){if(JZZ.util.iosSound=function(){},window){var a=window.AudioContext||window.webkitAudioContext;if(a){var b=new a;b.createGain||(b.createGain=b.createGainNode);var c=b.createOscillator(),d=b.createGain();d.gain.value=0,c.connect(d),d.connect(b.destination),c.start||(c.start=c.noteOn),c.stop||(c.stop=c.noteOff),c.start(0),c.stop(1)}}}}();