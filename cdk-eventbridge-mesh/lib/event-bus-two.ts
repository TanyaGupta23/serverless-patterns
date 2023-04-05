import { Construct } from "constructs";
import * as events from "aws-cdk-lib/aws-events";
import { EventBus } from "aws-cdk-lib/aws-events";

export class EventBusTwo extends Construct {
    private readonly _bus: EventBus;

    constructor(scope: Construct, id: string) {
        super(scope, id);

        this._bus = new events.EventBus(scope, "EventBusTwo", {
            eventBusName: "event-bus-two",
        });
    }

    get eventBus(): EventBus {
        return this._bus;
    }
}
