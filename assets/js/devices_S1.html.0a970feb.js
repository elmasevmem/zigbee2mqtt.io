"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[77576],{84026:(e,o,t)=>{t.r(o),t.d(o,{comp:()=>a,data:()=>s});var n=t(6254);const i={},a=(0,t(52753).A)(i,[["render",function(e,o){const t=(0,n.g2)("RouteLink");return(0,n.uX)(),(0,n.CE)("div",null,[o[17]||(o[17]=(0,n.Lk)("h1",{id:"ubisys-s1",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#ubisys-s1"},[(0,n.Lk)("span",null,"Ubisys S1")])],-1)),(0,n.Lk)("table",null,[o[6]||(o[6]=(0,n.Lk)("thead",null,[(0,n.Lk)("tr",null,[(0,n.Lk)("th"),(0,n.Lk)("th")])],-1)),(0,n.Lk)("tbody",null,[o[2]||(o[2]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Model"),(0,n.Lk)("td",null,"S1")],-1)),(0,n.Lk)("tr",null,[o[1]||(o[1]=(0,n.Lk)("td",null,"Vendor",-1)),(0,n.Lk)("td",null,[(0,n.bF)(t,{to:"/supported-devices/#v=Ubisys"},{default:(0,n.k6)((()=>o[0]||(o[0]=[(0,n.eW)("Ubisys")]))),_:1})])]),o[3]||(o[3]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Description"),(0,n.Lk)("td",null,"Power switch S1")],-1)),o[4]||(o[4]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Exposes"),(0,n.Lk)("td",null,"switch (state), power_on_behavior, power, energy, action")],-1)),o[5]||(o[5]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Picture"),(0,n.Lk)("td",null,[(0,n.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/S1.png",alt:"Ubisys S1"})])],-1))])]),o[18]||(o[18]=(0,n.Lk)("h2",{id:"notes",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#notes"},[(0,n.Lk)("span",null,"Notes")])],-1)),o[19]||(o[19]=(0,n.Lk)("h3",{id:"configuring-inputs",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#configuring-inputs"},[(0,n.Lk)("span",null,"Configuring Inputs")])],-1)),(0,n.Lk)("p",null,[o[8]||(o[8]=(0,n.eW)("In case the input(s) need to be reconfigured (e.g. to use stationary switches instead of momentary ones or vice versa) this can be done in the same way as ")),(0,n.bF)(t,{to:"/devices/C4.html#configuring-inputs"},{default:(0,n.k6)((()=>o[7]||(o[7]=[(0,n.eW)("it is being done for the ubisys C4")]))),_:1}),o[9]||(o[9]=(0,n.eW)("."))]),o[20]||(o[20]=(0,n.Lk)("h3",{id:"re-binding-and-or-decoupling",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#re-binding-and-or-decoupling"},[(0,n.Lk)("span",null,"(Re-)Binding and/or Decoupling")])],-1)),(0,n.Lk)("p",null,[o[11]||(o[11]=(0,n.eW)("Also see ")),(0,n.bF)(t,{to:"/devices/C4.html#binding"},{default:(0,n.k6)((()=>o[10]||(o[10]=[(0,n.eW)("the ubisys C4 documentation")]))),_:1}),o[12]||(o[12]=(0,n.eW)(", example use cases:"))]),o[21]||(o[21]=(0,n.Lk)("ul",null,[(0,n.Lk)("li",null,"Use the second input to control a different Zigbee device (S1-R only, S1 only has one input)"),(0,n.Lk)("li",null,"Completely decouple the input(s) from the local load")],-1)),o[22]||(o[22]=(0,n.Lk)("p",null,"When decoupled, 'action' will be published when pressing the attached switch button.",-1)),o[23]||(o[23]=(0,n.Lk)("h2",{id:"ota-updates",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#ota-updates"},[(0,n.Lk)("span",null,"OTA updates")])],-1)),(0,n.Lk)("p",null,[o[14]||(o[14]=(0,n.eW)("This device supports OTA updates, for more information see ")),(0,n.bF)(t,{to:"/guide/usage/ota_updates.html"},{default:(0,n.k6)((()=>o[13]||(o[13]=[(0,n.eW)("OTA updates")]))),_:1}),o[15]||(o[15]=(0,n.eW)("."))]),o[24]||(o[24]=(0,n.Lk)("h2",{id:"options",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#options"},[(0,n.Lk)("span",null,"Options")])],-1)),(0,n.Lk)("p",null,[(0,n.Lk)("em",null,[(0,n.bF)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,n.k6)((()=>o[16]||(o[16]=[(0,n.eW)("How to use device type specific configuration")]))),_:1})])]),o[25]||(o[25]=(0,n.Fv)('<ul><li><p><code>measurement_poll_interval</code>: This device does not support reporting electric measurements so it is polled instead. The default poll interval is 60 seconds, set to -1 to disable. The value must be a number with a minimum value of <code>-1</code></p></li><li><p><code>power_calibration</code>: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>power_precision</code>: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>energy_calibration</code>: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>energy_precision</code>: Number of digits after decimal point for energy, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>state_action</code>: State actions will also be published as &#39;action&#39; when true (default false). The value must be <code>true</code> or <code>false</code></p></li><li><p><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Example:</p></li></ul><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">simulated_brightness</span><span class="token punctuation">:</span></span>\n<span class="line">  <span class="token key atrule">delta</span><span class="token punctuation">:</span> <span class="token number">20</span> <span class="token comment"># delta per interval, default = 20</span></span>\n<span class="line">  <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># interval in milliseconds, default = 200</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch"><span>Switch</span></a></h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h4 id="on-with-timed-off" tabindex="-1"><a class="header-anchor" href="#on-with-timed-off"><span>On with timed off</span></a></h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionally an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands. Support depends on the switch firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h3 id="power-on-behavior-enum" tabindex="-1"><a class="header-anchor" href="#power-on-behavior-enum"><span>Power-on behavior (enum)</span></a></h3><p>Controls the behavior when the device is powered on after power loss. Value can be found in the published state on the <code>power_on_behavior</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power_on_behavior&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_on_behavior&quot;: NEW_VALUE}</code>. The possible values are: <code>off</code>, <code>on</code>, <code>toggle</code>, <code>previous</code>.</p><h3 id="power-numeric" tabindex="-1"><a class="header-anchor" href="#power-numeric"><span>Power (numeric)</span></a></h3><p>Instantaneous measured power. Value can be found in the published state on the <code>power</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="energy-numeric" tabindex="-1"><a class="header-anchor" href="#energy-numeric"><span>Energy (numeric)</span></a></h3><p>Sum of consumed energy. Value can be found in the published state on the <code>energy</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;energy&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>on_2</code>, <code>off_2</code>, <code>toggle_2</code>, <code>brightness_move_to_level_2</code>, <code>brightness_move_up_2</code>, <code>brightness_move_down_2</code>, <code>brightness_step_up_2</code>, <code>brightness_step_down_2</code>, <code>brightness_stop_2</code>, <code>color_temperature_move_stop_2</code>, <code>color_temperature_move_up_2</code>, <code>color_temperature_move_down_2</code>, <code>color_temperature_step_up_2</code>, <code>color_temperature_step_down_2</code>, <code>enhanced_move_to_hue_and_saturation_2</code>, <code>move_to_hue_and_saturation_2</code>, <code>color_hue_step_up_2</code>, <code>color_hue_step_down_2</code>, <code>color_saturation_step_up_2</code>, <code>color_saturation_step_down_2</code>, <code>color_loop_set_2</code>, <code>color_temperature_move_2</code>, <code>color_move_2</code>, <code>hue_move_2</code>, <code>hue_stop_2</code>, <code>move_to_saturation_2</code>, <code>move_to_hue_2</code>.</p>',15))])}]]),s=JSON.parse('{"path":"/devices/S1.html","title":"Ubisys S1 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Ubisys S1 control via MQTT","description":"Integrate your Ubisys S1 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2019-09-08T21:16:00.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Configuring Inputs","slug":"configuring-inputs","link":"#configuring-inputs","children":[]},{"level":3,"title":"(Re-)Binding and/or Decoupling","slug":"re-binding-and-or-decoupling","link":"#re-binding-and-or-decoupling","children":[]}]},{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Switch","slug":"switch","link":"#switch","children":[]},{"level":3,"title":"Power-on behavior (enum)","slug":"power-on-behavior-enum","link":"#power-on-behavior-enum","children":[]},{"level":3,"title":"Power (numeric)","slug":"power-numeric","link":"#power-numeric","children":[]},{"level":3,"title":"Energy (numeric)","slug":"energy-numeric","link":"#energy-numeric","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]}]}],"git":{"updatedTime":1740432005000},"filePathRelative":"devices/S1.md"}')}}]);