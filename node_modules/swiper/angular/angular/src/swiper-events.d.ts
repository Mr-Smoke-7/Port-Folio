import { SwiperEvents } from 'swiper/types';
export declare type EventsParams = {
    [Property in keyof SwiperEvents]: Parameters<SwiperEvents[Property]>;
};
