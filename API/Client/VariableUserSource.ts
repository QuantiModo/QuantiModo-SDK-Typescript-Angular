/// <reference path="api.d.ts" />

namespace API.Client {
    'use strict';

    export interface VariableUserSource {

        /**
         * ID of User
         */
        userId: number;

        /**
         * ID of variable
         */
        variableId: number;

        /**
         * ID of source
         */
        sourceId: number;

        /**
         * Time that this measurement occurred Uses epoch minute (epoch time divided by 60)
         */
        timestamp: number;

        /**
         * Earliest measurement time
         */
        earliestMeasurementTime: number;

        /**
         * Latest measurement time
         */
        latestMeasurementTime: number;

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