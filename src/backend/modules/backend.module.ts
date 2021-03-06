import { Logger, Module } from '@nestjs/common';
import { OnModuleInit } from "@nestjs/common/interfaces/modules";

@Module({
})
export class BackendModule implements OnModuleInit {
    private logger: Logger;

    constructor() {
        this.logger = new Logger('NotaddApplication', true);
    }

    onModuleInit(): any {
    }
}
