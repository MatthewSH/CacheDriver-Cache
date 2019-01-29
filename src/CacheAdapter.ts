import { Cache as CacheDriver } from "cache-driver"
const Cache = require("cache");

export class CacheAdapter implements CacheDriver {
    private cache: any;

    constructor() {
        this.cache = new Cache();
    }

    public get(id: string): any {
        return this.cache.get(id);
    }

    public has(id: string): boolean {
        return this.get(id) !== null;
    }

    public save(id: string, data: any, ttl: number): void {
        this.cache.put(id, data, (ttl * 60000));
    }

    public delete(id: string): boolean {
        this.save(id, null, 1);

        return true;
    }
}