/**
 * Copyright 2021 Angus.Fenying <fenying@litert.org>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// tslint:disable: no-console

import * as $TZ from '../lib';

const tz = $TZ.getDefaultTimezoneManager();

const tzShanghai = tz.findByName('Asia/Shanghai');

console.log(JSON.stringify(tzShanghai, null, 2));

const tzGB = tz.findByLocation('GB');

console.log(JSON.stringify(tzGB, null, 2));

const tz480 = tz.findByOffset(480);

console.log(JSON.stringify(tz480, null, 2));

for (const i of tz.findCanonicalList()) {

    console.log(i.name.padEnd(32, ' ') + tz.offsetToString(i.offset));
}
