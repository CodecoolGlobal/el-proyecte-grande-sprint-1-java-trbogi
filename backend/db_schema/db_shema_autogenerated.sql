create table address
(
    id           uuid    not null
        constraint address_pk
            primary key,
    city         text    not null,
    zip          integer not null,
    country      text    not null,
    address_line text    not null
);

alter table address
    owner to laczkoattila;

create unique index address_id_uindex
    on address (id collate ??? ???);

create table "user"
(
    id              uuid not null
        constraint user_pk
            primary key,
    name            text not null,
    email           text not null,
    phone           integer,
    password        text not null,
    role            text,
    profile_picture text,
    address_id      uuid
        constraint user_address_id_fk
            references address
            on delete cascade
);

alter table "user"
    owner to laczkoattila;

create unique index user_email_uindex
    on "user" (email ???);

create unique index user_id_uindex
    on "user" (id collate ??? ???);

create table cart
(
    id      uuid not null
        constraint cart_pk
            primary key,
    user_id uuid not null
        constraint cart_user_id_fk
            references "user"
            on delete cascade
);

alter table cart
    owner to laczkoattila;

create unique index cart_id_uindex
    on cart (id collate ??? ???);

create table product_category
(
    id   uuid not null
        constraint product_category_pk
            primary key,
    name text not null
);

alter table product_category
    owner to laczkoattila;

create unique index product_category_id_uindex
    on product_category (id collate ??? ???);

create table product
(
    id          uuid   not null
        constraint product_pk
            primary key,
    name        text   not null,
    description text,
    price       bigint not null,
    category_id uuid   not null
        constraint product_product_category_id_fk
            references product_category
);

alter table product
    owner to laczkoattila;

create unique index product_id_uindex
    on product (id collate ??? ???);

create table products_of_cart
(
    product_id uuid    not null,
    quantity   integer not null,
    cart_id    uuid    not null
        constraint products_of_cart_cart_id_fk
            references cart
            on delete cascade
);

alter table products_of_cart
    owner to laczkoattila;

create table reservation
(
    id                uuid    not null
        constraint reservation_pk
            primary key,
    court_number      integer not null,
    reservation_start date    not null,
    reservation_end   date    not null,
    participant_limit integer,
    coach_id          uuid
        constraint reservation_user_id_fk
            references "user",
    price             bigint  not null
);

alter table reservation
    owner to laczkoattila;

create unique index reservation_id_uindex
    on reservation (id collate ??? ???);

create table reservation_of_cart
(
    reservation_id uuid not null
        constraint reservation_of_cart_reservation_id_fk
            references reservation,
    cart_id        uuid not null
        constraint reservation_of_cart_cart_id_fk
            references cart
            on delete cascade
);

alter table reservation_of_cart
    owner to laczkoattila;

create table clients_of_reservation
(
    client_id      uuid    not null,
    payment_status boolean not null,
    reservation_id uuid    not null
        constraint clients_of_reservation_reservation_id_fk
            references reservation
            on delete cascade
);

alter table clients_of_reservation
    owner to laczkoattila;


