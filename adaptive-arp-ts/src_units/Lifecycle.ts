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

///<reference path="APIBean.ts"/>
///<reference path="LifecycleState.ts"/>

module Adaptive {

     /**
        @class Adaptive.Lifecycle
        @extends Adaptive.APIBean
        Represents a specific application life-cycle stage.

        @author Francisco Javier Martin Bueno
        @since v2.0
        @version 1.0
     */
     export class Lifecycle extends APIBean {

          /**
             @property {Adaptive.LifecycleState} state
             Represent the state of the app
<p>
Possible lifecycle States:
<p>
1. Starting    - Before starting.
2. Started     - Start concluded.
3. Running     - Accepts user interaction - running in foreground.
4. Pausing     - Before going to background.
4.1 PausedIdle - In background, no scheduled background activity (passive).
4.2 PausedRun  - In background, scheduled background activity (periodic network access, gps access, etc.)
5. Resuming    - Before going to foreground, followed by Running state.
6. Stopping    - Before stopping.
          */
          state : LifecycleState;

          /**
             @property {Adaptive.LifecycleState} state
             Represent the state of the app
<p>
Possible lifecycle States:
<p>
1. Starting    - Before starting.
2. Started     - Start concluded.
3. Running     - Accepts user interaction - running in foreground.
4. Pausing     - Before going to background.
4.1 PausedIdle - In background, no scheduled background activity (passive).
4.2 PausedRun  - In background, scheduled background activity (periodic network access, gps access, etc.)
5. Resuming    - Before going to foreground, followed by Running state.
6. Stopping    - Before stopping. The 'stateProperty' is registered with the ECMAScript 5 Object.defineProperty() for the class field 'state'.
          */
          get stateProperty() : LifecycleState {
               return this.state;
          }

          set stateProperty(state:LifecycleState) {
               this.state = state;
          }

          /**
             @property {number} timestamp
             The timestamps in milliseconds when the event was fired.
          */
          timestamp : number;

          /**
             @property {number} timestamp
             The timestamps in milliseconds when the event was fired. The 'timestampProperty' is registered with the ECMAScript 5 Object.defineProperty() for the class field 'timestamp'.
          */
          get timestampProperty() : number {
               return this.timestamp;
          }

          set timestampProperty(timestamp:number) {
               this.timestamp = timestamp;
          }

          /**
             @method constructor
             Constructor used by the implementation

             @param {Adaptive.LifecycleState} state of the app
             @param {number} timestamp Timestamp of the event
             @since v2.0
          */
          constructor(state: LifecycleState, timestamp: number) {
               super();
               this.state = state;
               this.timestamp = timestamp;
          }

          /**
             @method
             Returns the state of the application

             @return {Adaptive.LifecycleState} state of the app
             @since v2.0
          */
          getState() : LifecycleState {
               return this.state;
          }

          /**
             @method
             Set the State of the application

             @param {Adaptive.LifecycleState} state of the app
             @since v2.0
          */
          setState(state: LifecycleState) {
               this.state = state;
          }

          /**
             @method
             Gets the timestamp in milliseconds of the event.

             @return {number} Timestamp of the event.
             @since v2.2.1
          */
          getTimestamp() : number {
               return this.timestamp;
          }

          /**
             @method
             Sets the timestamp in milliseconds of the event.

             @param {number} timestamp Timestamp of the event.
             @since v2.2.1
          */
          setTimestamp(timestamp: number) {
               this.timestamp = timestamp;
          }

          /**
             @method
             @static
             Convert JSON parsed object to typed equivalent.
             @param {Object} object JSON parsed structure of type Adaptive.Lifecycle.
             @return {Adaptive.Lifecycle} Wrapped object instance.
          */
          static toObject(object : any) : Lifecycle {
               var result : Lifecycle = new Lifecycle(null, null);

               if (object != null ) {
                    // Assign values to bean fields.
                    result.state = LifecycleState.toObject(object.state);
                    result.timestamp = object.timestamp;

               }
               return result;
          }

          /**
             @method
             @static
             Convert JSON parsed object array to typed equivalent.
             @param {Object} object JSON parsed structure of type Adaptive.Lifecycle[].
             @return {Adaptive.Lifecycle[]} Wrapped object array instance.
          */
          static toObjectArray(object : any) : Lifecycle[] {
               var resultArray : Array<Lifecycle> = new Array<Lifecycle>();
               if (object != null) {
                    for (var i = 0; i < object.length; i++) {
                         resultArray.push(Lifecycle.toObject(object[i]));
                    }
               }
               return resultArray;
          }

     }
}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
