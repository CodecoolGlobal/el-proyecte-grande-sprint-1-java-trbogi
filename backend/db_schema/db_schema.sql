drop table if exists product;

drop table if exists product_category;

drop table if exists products_of_cart;

drop table if exists reservation_of_cart;

drop table if exists cart;

drop table if exists clients_of_reservation;

drop table if exists reservation;

drop table if exists "user";

drop table if exists address;

create table address
(
    id           uuid not null
        constraint address_pk
            primary key,
    city         text not null,
    zip          int  not null,
    country      text not null,
    address_line text not null
);

create unique index address_id_uindex
    on address (id);


create table "user"
(
    id              uuid not null
        constraint user_pk
            primary key,
    name            text not null,
    email           text not null,
    phone           int,
    password        text not null,
    role            text,
    profile_picture text,
    address_id      uuid constraint
        user_address_id_fk references address
        on delete cascade
);

create unique index user_email_uindex
    on "user" (email);

create unique index user_id_uindex
    on "user" (id);


create table cart
(
    id      uuid not null
        constraint cart_pk
            primary key,
    user_id uuid not null
        constraint cart_user_id_fk
            references "user" on delete cascade
);

create unique index cart_id_uindex
    on cart (id);

create table product_category
(
    id   uuid not null
        constraint product_category_pk
            primary key,
    name text not null
);

create unique index product_category_id_uindex
    on product_category (id);

create table product
(
    id          uuid   not null
        constraint product_pk
            primary key,
    name        text   not null,
    description text,
    price       bigint not null,
    category_id uuid not null constraint product_product_category_id_fk
         references product_category
);

create unique index product_id_uindex
    on product (id);



create table products_of_cart
(
    product_id uuid not null,
    quantity   int  not null,
    cart_id    uuid not null
        constraint products_of_cart_cart_id_fk
            references cart
            on delete cascade
);

create table reservation
(
    id                uuid   not null
        constraint reservation_pk
            primary key,
    court_number      int    not null,
    reservation_start date   not null,
    reservation_end   date   not null,
    participant_limit int,
    coach_id          uuid
        constraint reservation_user_id_fk
            references "user",
    price             bigint not null
);

create unique index reservation_id_uindex
    on reservation (id);

create table reservation_of_cart
(
    reservation_id uuid not null constraint reservation_of_cart_reservation_id_fk
        references reservation,
    cart_id        uuid not null
        constraint reservation_of_cart_cart_id_fk
            references cart
            on delete cascade
);


create table clients_of_reservation
(
    client_id      uuid not null,
    payment_status bool not null,
    reservation_id uuid not null
        constraint clients_of_reservation_reservation_id_fk
            references reservation
            on delete cascade
);
