/// <reference path="api.d.ts" />

namespace API.Client {
    'use strict';

    export interface MeasurementExport {

        /**
         * id
         */
        id: number;

        /**
         * ID of User
         */
        userId: number;

        /**
         * Status of Measurement Export
         */
        status: string;

        /**
         * Error message
         */
        errorMessage: string;

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