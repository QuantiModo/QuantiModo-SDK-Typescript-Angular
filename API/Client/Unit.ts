/// <reference path="api.d.ts" />

namespace API.Client {
    'use strict';

    export interface Unit {

        /**
         * id
         */
        id: number;

        /**
         * client_id
         */
        clientId: string;

        /**
         * Unit name
         */
        name: string;

        /**
         * Unit abbreviation
         */
        abbreviatedName: string;

        /**
         * Unit category ID
         */
        categoryId: number;

        /**
         * Unit minimum value
         */
        minimumValue: number;

        /**
         * Unit maximum value
         */
        maximumValue: number;

        /**
         * updated
         */
        updated: number;

        /**
         * ID of default unit
         */
        defaultUnitId: number;

        /**
         * Value multiplied to
         */
        multiply: number;

        /**
         * Value which should be added to convert to default unit
         */
        add: number;

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