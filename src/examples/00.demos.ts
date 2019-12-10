// tslint:disable: no-console

import * as $TZ from "../lib";

const tz = $TZ.getDefaultTimezoneManager();

const tzShanghai = tz.findByName("Asia/Shanghai");

console.log(JSON.stringify(tzShanghai, null, 2));

const tzGB = tz.findByLocation("GB");

console.log(JSON.stringify(tzGB, null, 2));

const tz480 = tz.findByOffset(480);

console.log(JSON.stringify(tz480, null, 2));

for (const i of tz.findCanonicalList()) {

    console.log(i.name.padEnd(32, " ") + tz.offsetToString(i.offset));
}
