/// <reference path="api.d.ts" />

namespace API.Client {
    'use strict';

    export interface UnitConversion {

        /**
         * unit_id
         */
        unitId: number;

        /**
         * step in the conversion process
         */
        stepNumber: boolean;

        /**
         * 0 is add and 1 is multiply
         */
        operation: boolean;

        /**
         * number used in the operation
         */
        value: number;

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