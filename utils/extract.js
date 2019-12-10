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