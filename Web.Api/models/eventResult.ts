export type EventResponse = {
    page: EventPage;
    results: EventResult;
    _embedded: {
        events: unknown[]; // Would be nice if this was typed on the Ticketmaster support portal
    }
}

export type EventPage = {
    number: number;
    size: number;
    totalElements: number;
    totalPages: number;
}

export type EventResult = {
    id: string;
    name: string;
    //... TODO: Find other things to include
}

export type EventLinks = {
    first: EventLink;
    last: EventLink;
    next: EventLink;
    self: EventLink;
}

export type EventLink = {
    href: string;
}