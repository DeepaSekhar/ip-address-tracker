
import { Asn } from './asn'
import { Proxy } from './proxy'
export interface Tracker {
    ip: string;
    location: Location;
    domains: string[];
    as: Asn;
    isp: string;
    proxy: Proxy;
}
