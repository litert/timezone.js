# LiteRT/TimeZone

[![npm version](https://img.shields.io/npm/v/@litert/timezone.svg?colorB=brightgreen)](https://www.npmjs.com/package/@litert/timezone "Stable Version")
[![License](https://img.shields.io/npm/l/@litert/timezone.svg?maxAge=2592000?style=plastic)](https://github.com/litert/timezone/blob/master/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/litert/timezone.js.svg)](https://github.com/litert/timezone.js/issues)
[![GitHub Releases](https://img.shields.io/github/release/litert/timezone.js.svg)](https://github.com/litert/timezone.js/releases "Stable Release")

The timezone support library of LiteRT.

> Copyright: This is just a toolset of timezone operation for JavaScript.
> As all timezone data is extracted from [WikiPedia](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).

## Requirements

- TypeScript v3.1.x (Or newer)

## Installation

```sh
npm i @litert/timezone --save
```

## Usage

```ts
import TZ from "@litert/timezone";

console.log(TZ.findByName("Asia/Brunei")); // Find the info of timezone Asia/Brunei.

console.log(TZ.findByLocation("US")); // Find the list of timezone used by US.

console.log(TZ.findByOffset(480)); // Find the list of timezones whose offset is 480 (from UTC, ini).

console.log(TZ.findByDSTOffset(480)); // Find the list of timezones whose DST offset is 480.

console.log(TZ.findCanonicalList()); // Find out list of all canonical timezone.

console.log(TZ.offsetToString(480)); // Convert minute offset into string, which should be +08:00.

console.log(TZ.offsetToString('-08:00')); // Convert a string into minute offset, which should be -08:00.
```

## Documents

Preparing yet.

## License

This library is published under [Apache-2.0](./LICENSE) license.
