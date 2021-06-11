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

(function() {

    const rawData = [];

    $('#mw-content-text > div > table:nth-child(9) > tbody > tr').each(function() {
        const countryCode = $(this).find('td:nth-child(1)').text().trim().toUpperCase();
        const tzName = $(this).find('td:nth-child(3)').text().trim();
        const description = $(this).find('td:nth-child(4)').text().trim();
        const status = $(this).find('td:nth-child(5)').text().trim().toLowerCase();
        const offset = $(this).find('td:nth-child(6)').text().trim();
        const dstOffset = $(this).find('td:nth-child(7)').text().trim();
        const notes = $(this).find('td:nth-child(8)').text().trim();
        const alias = notes.startsWith("Link to") ? $(this).find('td:nth-child(8) a').text().trim() : null;

        rawData.push({
            countryCode,
            name: tzName,
            description,
            status,
            offset,
            dstOffset,
            notes,
            alias
        });
    });

    const timezones = {};

    function offsetToMinutes(offset) {

        let [h, m] = offset.slice(1).split(":");

        const minutes = parseInt(h) * 60 + parseInt(m);

        /**
         * The "−" is not minus sign, it's unicode char `0x2212`.
         */
        return offset.charCodeAt(0) !== 43 ? -1 * minutes : minutes;
    }

    for (const row of rawData) {

        const item = timezones[row.name.toLowerCase()] = {
            name: row.name,
            description: row.description,
            location: row.countryCode || null,
            offset: offsetToMinutes(row.offset),
            dstOffset: offsetToMinutes(row.dstOffset),
            deprecated: false,
            canonical: false,
            aliasOf: null
        };

        switch (row.status) {
        case "deprecated":

            item.deprecated = true;

        case "alias":

            if (row.alias) {

                item.aliasOf = row.alias;
            }
            else if (row.status === "alias") {

                console.error("NO ALIAS!");
                console.error(row);
            }

            break;

        case "canonical":

            item.canonical = true;

            break;
        }
    }

    console.log(`const TIME_ZONES = ${JSON.stringify(timezones, null, 4)};`);

})();