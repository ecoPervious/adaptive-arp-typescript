/**
--| ADAPTIVE RUNTIME PLATFORM |----------------------------------------------------------------------------------------

(C) Copyright 2013-2015 Carlos Lozano Diez t/a Adaptive.me <http://adaptive.me>.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the
License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 . Unless required by appli-
-cable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS,  WITHOUT
WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the  License  for the specific language governing
permissions and limitations under the License.

Original author:

    * Carlos Lozano Diez
            <http://github.com/carloslozano>
            <http://twitter.com/adaptivecoder>
            <mailto:carlos@adaptive.me>

Contributors:

    * Ferran Vila Conesa
             <http://github.com/fnva>
             <http://twitter.com/ferran_vila>
             <mailto:ferran.vila.conesa@gmail.com>

    * See source code files for contributors.

Release:

    * @version v2.2.15

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

///<reference path="APIRequest.ts"/>
///<reference path="APIResponse.ts"/>
///<reference path="BaseCommunicationBridge.ts"/>
///<reference path="CommonUtil.ts"/>
///<reference path="IAdaptiveRPGroup.ts"/>
///<reference path="IBaseCommunication.ts"/>
///<reference path="IService.ts"/>
///<reference path="IServiceMethod.ts"/>
///<reference path="IServiceResultCallback.ts"/>
///<reference path="ServiceRequest.ts"/>
///<reference path="ServiceResultCallback.ts"/>
///<reference path="ServiceToken.ts"/>
module Adaptive {

     /**
        @class Adaptive.ServiceBridge
        @extends Adaptive.BaseCommunicationBridge
        Interface for Managing the Services operations

        @author Francisco Javier Martin Bueno
        @since v2.0
     */
     export class ServiceBridge extends BaseCommunicationBridge implements IService {

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               super();
          }

          /**
             @method
             Create a service request for the given ServiceToken. This method creates the request, populating
existing headers and cookies for the same service. The request is populated with all the defaults
for the service being invoked and requires only the request body to be set. Headers and cookies may be
manipulated as needed by the application before submitting the ServiceRequest via invokeService.

             @param {Adaptive.ServiceToken} serviceToken serviceToken ServiceToken to be used for the creation of the request.
             @return {Adaptive.ServiceRequest} ServiceRequest with pre-populated headers, cookies and defaults for the service.
             @since v2.0.6
          */
          getServiceRequest(serviceToken : ServiceToken) : ServiceRequest {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(serviceToken));
               var apiRequest : APIRequest = new APIRequest("IService","getServiceRequest",arParams, -1 /* = synchronous call */);
               var apiResponse = postRequest(apiRequest);
               // Prepare response.
               var response : ServiceRequest = null;
               // Check response.
               if (apiResponse != null && apiResponse.getStatusCode() === 200) {
                    response = ServiceRequest.toObject(JSON.parse(apiResponse.getResponse()));
               }
               return response;
          }

          /**
             @method
             Obtains a ServiceToken for the given parameters to be used for the creation of requests.

             @param {string} serviceName serviceName  Service name.
             @param {string} endpointName endpointName Endpoint name.
             @param {string} functionName functionName Function name.
             @param {Adaptive.IServiceMethod} method method       Method type.
             @return {Adaptive.ServiceToken} ServiceToken to create a service request or null if the given parameter combination is not
configured in the platform's XML service definition file.
             @since v2.0.6
          */
          getServiceToken(serviceName : string, endpointName : string, functionName : string, method : IServiceMethod) : ServiceToken {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(serviceName));
               arParams.push(JSON.stringify(endpointName));
               arParams.push(JSON.stringify(functionName));
               arParams.push(JSON.stringify(method));
               var apiRequest : APIRequest = new APIRequest("IService","getServiceToken",arParams, -1 /* = synchronous call */);
               var apiResponse = postRequest(apiRequest);
               // Prepare response.
               var response : ServiceToken = null;
               // Check response.
               if (apiResponse != null && apiResponse.getStatusCode() === 200) {
                    response = ServiceToken.toObject(JSON.parse(apiResponse.getResponse()));
               }
               return response;
          }

          /**
             @method
             Obtains a Service token by a concrete uri (http://domain.com/path). This method would be useful when
a service response is a redirect (3XX) and it is necessary to make a request to another host and we
don't know by advance the name of the service.

             @param {string} uri uri Unique Resource Identifier for a Service-Endpoint-Path-Method
             @return {Adaptive.ServiceToken} ServiceToken to create a service request or null if the given parameter is not
configured in the platform's XML service definition file.
             @since v2.1.4
          */
          getServiceTokenByUri(uri : string) : ServiceToken {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(uri));
               var apiRequest : APIRequest = new APIRequest("IService","getServiceTokenByUri",arParams, -1 /* = synchronous call */);
               var apiResponse = postRequest(apiRequest);
               // Prepare response.
               var response : ServiceToken = null;
               // Check response.
               if (apiResponse != null && apiResponse.getStatusCode() === 200) {
                    response = ServiceToken.toObject(JSON.parse(apiResponse.getResponse()));
               }
               return response;
          }

          /**
             @method
             Returns all the possible service tokens configured in the platform's XML service definition file.

             @return {Adaptive.ServiceToken[]} Array of service tokens configured.
             @since v2.0.6
          */
          getServicesRegistered() : Array<ServiceToken> {
               // Create and populate API request.
               var arParams : string[] = [];
               var apiRequest : APIRequest = new APIRequest("IService","getServicesRegistered",arParams, -1 /* = synchronous call */);
               var apiResponse = postRequest(apiRequest);
               // Prepare response.
               var response : Array<ServiceToken> = null;
               // Check response.
               if (apiResponse != null && apiResponse.getStatusCode() === 200) {
                    response = new Array<ServiceToken>();
                    var responseArray : [any] = JSON.parse(apiResponse.getResponse());
                    for(var i = 0;i < responseArray.length; i++) {
                         response.push(ServiceToken.toObject(responseArray[i]));
                    }
               }
               return response;
          }

          /**
             @method
             Executes the given ServiceRequest and provides responses to the given callback handler.

             @param {Adaptive.ServiceRequest} serviceRequest serviceRequest ServiceRequest with the request body.
             @param {Adaptive.ServiceResultCallback} callback callback       IServiceResultCallback to handle the ServiceResponse.
             @since v2.0.6
          */
          invokeService(serviceRequest : ServiceRequest, callback : IServiceResultCallback) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(serviceRequest));
               var apiRequest : APIRequest = new APIRequest("IService","invokeService",arParams, callback.getId());
               postRequestCallback(apiRequest, callback, registeredServiceResultCallback);
          }

          /**
             @method
             Checks whether a specific service, endpoint, function and method type is configured in the platform's
XML service definition file.

             @param {string} serviceName serviceName  Service name.
             @param {string} endpointName endpointName Endpoint name.
             @param {string} functionName functionName Function name.
             @param {Adaptive.IServiceMethod} method method       Method type.
             @return {boolean} Returns true if the service is configured, false otherwise.
             @since v2.0.6
          */
          isServiceRegistered(serviceName : string, endpointName : string, functionName : string, method : IServiceMethod) : boolean {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(serviceName));
               arParams.push(JSON.stringify(endpointName));
               arParams.push(JSON.stringify(functionName));
               arParams.push(JSON.stringify(method));
               var apiRequest : APIRequest = new APIRequest("IService","isServiceRegistered",arParams, -1 /* = synchronous call */);
               var apiResponse = postRequest(apiRequest);
               // Prepare response.
               var response : boolean = false;
               // Check response.
               if (apiResponse != null && apiResponse.getStatusCode() === 200) {
                    response = JSON.parse(apiResponse.getResponse());
               }
               return response;
          }
     }
}
/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
