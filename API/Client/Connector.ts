/// <reference path="api.d.ts" />

module API.Client {
    'use strict';

    export class Connector {

        /**
         * Connector ID number
         */
        id: number;

        /**
         * Connector lowercase system name
         */
        name: string;

        /**
         * Connector pretty display name
         */
        displayName: string;

        /**
         * URL to the image of the connector logo
         */
        image: string;

        /**
         * URL to a site where one can get this device or application
         */
        getItUrl: string;

        /**
         * True if the authenticated user has this connector enabled
         */
        connected: string;

        /**
         * URL and parameters used when connecting to a service
         */
        connectInstructions: string;

        /**
         * Epoch timestamp of last sync
         */
        lastUpdate: number;

        /**
         * Number of measurements obtained during latest update
         */
        latestData: number;

        /**
         * True if user has no measurements for this connector
         */
        noDataYet: boolean;
    }

}