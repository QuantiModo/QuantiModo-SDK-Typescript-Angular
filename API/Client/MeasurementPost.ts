/// <reference path="api.d.ts" />

namespace API.Client {
    'use strict';

    export interface MeasurementPost {

        /**
         * variable_id
         */
        variableId: number;

        /**
         * source_id
         */
        sourceId: number;

        /**
         * unit_id
         */
        unitId: number;

        /**
         * measurements
         */
        measurements: Array<MeasurementValue>;
    }

}