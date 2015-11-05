/// <reference path="api.d.ts" />

namespace API.Client {
    'use strict';

    export interface UnitCategory {

        /**
         * id
         */
        id: number;

        /**
         * Unit category name
         */
        name: string;

        /**
         * created_at
         */
        createdAt: Date;

        /**
         * updated_at
         */
        updatedAt: Date;
    }

}
