/// <reference path="api.d.ts" />

namespace API.Client {
    'use strict';

    export interface Measurement {

        /**
         * id
         */
        id: number;

        /**
         * ID of user that owns this measurement
         */
        userId: number;

        /**
         * client_id
         */
        clientId: string;

        /**
         * Connector ID
         */
        connectorId: number;

        /**
         * ID of the variable for which we are creating the measurement records
         */
        variableId: number;

        /**
         * Application or device used to record the measurement values
         */
        sourceId: number;

        /**
         * Start Time for the measurement event in ISO 8601
         */
        startTime: number;

        /**
         * Converted measurement value in requested unit
         */
        value: number;

        /**
         * Unit ID of measurement as requested in GET request
         */
        unitId: number;

        /**
         * Original value
         */
        originalValue: number;

        /**
         * Unit ID of measurement as originally submitted
         */
        originalUnitId: number;

        /**
         * duration of measurement in seconds
         */
        duration: number;

        /**
         * Note of measurement
         */
        note: string;

        /**
         * latitude
         */
        latitude: number;

        /**
         * longitude
         */
        longitude: number;

        /**
         * location
         */
        location: string;

        /**
         * created_at
         */
        createdAt: Date;

        /**
         * updated_at
         */
        updatedAt: Date;

        /**
         * error
         */
        error: string;
    }

}
