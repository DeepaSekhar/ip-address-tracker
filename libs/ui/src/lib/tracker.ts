
import { Asn } from './asn'
import { Proxy } from './proxy'
import { Location } from './location'
export interface Tracker {
    ip: string;
    location: Location;
    domains: string[];
    as: Asn;
    isp: string;
    proxy: Proxy;
}
