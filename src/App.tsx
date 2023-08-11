import React from 'react';
import s from './App.module.css';

const welbexLogo = require('./styles/images/logo_welbex.jpg');

function App() {
    return (
        <div className={s.app}>
            <div className={s.background}>
                <div className={s.background_purple_ball}></div>
                <div className={s.background_red_big_ball}></div>
                <div className={s.background_red_small_ball}></div>
                <div className={s.background_purple_light}></div>
                <div className={s.background_red_light}></div>
            </div>
            <div className={s.box}>
                <div className={s.header_desktop}>
                    <div className={s.header_main_content}>
                        <div className={s.welbex_logo_and_menu}>
                            <div className={s.welbex_logo}>
                                <svg width="140" height="24" viewBox="0 0 140 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_0_31)">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M45.0018 5L51.2891 17.5571L50.4983 19.1196L43.1697 5H45.0018ZM65.3871 5L58.1163 19.1196L50.4598 5H52.2341L58.1163 16.051C58.412 15.4861 58.7463 14.8367 59.1191 14.1025C59.492 13.3682 59.8681 12.6121 60.2474 11.8339C60.6267 11.0557 61.0028 10.287 61.3756 9.52769C61.7484 8.76837 62.086 8.07494 62.3881 7.4474C62.6903 6.81986 62.9442 6.28646 63.1499 5.84718C63.3556 5.4079 63.4906 5.12551 63.5549 5H65.3871ZM79.2619 6.37431V5H69.9275V19.1384H79.2619V17.7642H71.3547V12.7752H77.9505V11.4009H71.3547V6.37431H79.2619ZM83.4167 19.1384V5H84.8438V17.7642H92.7511V19.1384H83.4167ZM96.9058 5V19.1384H103.829C103.932 19.1384 104.161 19.1039 104.514 19.0349C104.868 18.9658 105.25 18.8121 105.662 18.5737C105.855 18.4607 106.057 18.3132 106.269 18.1313C106.481 17.9492 106.671 17.7265 106.838 17.4629C107.005 17.1993 107.143 16.8887 107.253 16.5311C107.362 16.1733 107.417 15.756 107.417 15.2791C107.417 14.7394 107.346 14.2687 107.205 13.8671C107.063 13.4655 106.883 13.1204 106.665 12.8317C106.446 12.543 106.198 12.3108 105.922 12.1351C105.646 11.9594 105.366 11.8213 105.083 11.7209C105.366 11.4448 105.61 11.0652 105.816 10.582C106.022 10.0988 106.124 9.51828 106.124 8.84053C106.124 8.3385 106.07 7.90551 105.961 7.54153C105.851 7.17756 105.713 6.86379 105.546 6.60023C105.379 6.33666 105.192 6.11702 104.987 5.94131C104.781 5.7656 104.582 5.62126 104.389 5.50831C104.17 5.3828 103.961 5.28553 103.762 5.2165C103.563 5.14747 103.383 5.09727 103.222 5.06589C103.061 5.03451 102.929 5.01569 102.827 5.00941C102.724 5.00314 102.666 5 102.653 5H96.9058ZM103.791 17.7642C103.842 17.7642 103.984 17.7422 104.215 17.6982C104.447 17.6543 104.694 17.5508 104.958 17.3877C105.221 17.2244 105.456 16.9766 105.662 16.6439C105.867 16.3114 105.97 15.8564 105.97 15.2791C105.97 14.7017 105.867 14.2468 105.662 13.9142C105.456 13.5816 105.221 13.3306 104.958 13.1611C104.694 12.9917 104.443 12.885 104.206 12.8411C103.968 12.7972 103.823 12.7752 103.772 12.7752H98.333V17.7642H103.791ZM103.068 11.3256C102.843 11.3758 102.704 11.4009 102.653 11.4009H98.333V6.37431H102.653C102.679 6.37431 102.801 6.39313 103.019 6.43078C103.238 6.46844 103.476 6.56571 103.733 6.72259C103.99 6.87948 104.225 7.12422 104.437 7.45681C104.649 7.78941 104.755 8.25065 104.755 8.84053C104.755 9.41787 104.656 9.87598 104.456 10.2148C104.257 10.5537 104.032 10.811 103.781 10.9867C103.531 11.1624 103.293 11.2754 103.068 11.3256ZM121.639 5V6.37431H113.731V11.4009H120.327V12.7752H113.731V17.7642H121.639V19.1384H112.304V5H121.639ZM132.331 13.1141L137.153 19.1384H139.043L133.431 12.0598L139.043 5H137.153L132.331 11.0244L127.78 5H125.639L131.251 12.0598L125.639 19.1384H127.78L132.331 13.1141Z"
                                              fill="#E4E5EA"/>
                                    </g>
                                    <g clip-path="url(#clip1_0_31)">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M24.5946 0H0V12.7841H1.3208V1.28886H23.2738V5.52746H21.0842V5.53671H21.0684C21.0096 5.65146 20.8861 5.90965 20.698 6.31127C20.5098 6.7129 20.2776 7.20058 20.0012 7.77434C19.7249 8.34809 19.4162 8.98207 19.0752 9.67634C18.7342 10.3706 18.3901 11.0734 18.0433 11.7848C17.6964 12.4963 17.3524 13.1876 17.0114 13.859C16.6704 14.5302 16.3647 15.1241 16.0941 15.6404L10.7143 5.53671H9.09151L16.0941 18.446L22.1009 6.7853H24.5927V6.77176H24.5946V0ZM0 17.1961H0.00609518V17.1819H8.47042L2.42401 5.53671H4.0997L9.84995 17.0175L9.1268 18.446L9.1157 18.4247V18.4398H1.3208V22.7111H23.2738V11.1838H24.5946V24H0V17.1961ZM33.6949 24V0H35.0517V24H33.6949Z"
                                              fill="#E4E5EA"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_0_31">
                                            <rect width="97" height="15" fill="white" transform="translate(43 5)"/>
                                        </clipPath>
                                        <clipPath id="clip1_0_31">
                                            <rect width="35" height="24" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div className={s.menu_services_items_list}>
                                <div className={s.menu_services_item}>Услуги</div>
                                <div className={s.menu_services_item}>Виджеты</div>
                                <div className={s.menu_services_item}>Интеграции</div>
                                <div className={s.menu_services_item}>Кейсы</div>
                                <div className={s.menu_services_item}>Сертификаты</div>
                            </div>
                        </div>
                        <div className={s.contacts}>
                            <div className={s.contacts_tel_number}>
                                +7 555 555-55-55
                            </div>
                            <div className={s.contacts_media_icons}>
                                <div className={`${s.contacts_media_icon} ${s.contacts_media_icon_telegram}`}>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M17.2208 3.09753L2.44582 8.79503C1.43748 9.20003 1.44332 9.76253 2.26082 10.0134L6.05415 11.1967L14.8308 5.6592C15.2458 5.4067 15.625 5.54253 15.3133 5.8192L8.20248 12.2367H8.20082L8.20248 12.2375L7.94082 16.1475C8.32415 16.1475 8.49332 15.9717 8.70831 15.7642L10.5508 13.9725L14.3833 16.8034C15.09 17.1925 15.5975 16.9925 15.7733 16.1492L18.2892 4.29253C18.5466 3.26003 17.895 2.79253 17.2208 3.09753Z"
                                            fill="#E4E5EA"/>
                                    </svg>
                                </div>
                                <div className={`${s.contacts_media_icon} ${s.contacts_media_icon_viber}`}>
                                    <svg width="20" height="19" viewBox="0 0 20 19" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M10.7742 2C10.4891 2 10.2581 2.21952 10.2581 2.49032C10.2581 2.76112 10.4891 2.98065 10.7742 2.98065C14.1948 2.98065 16.9677 5.61494 16.9677 8.86452C16.9677 9.13531 17.1988 9.35484 17.4839 9.35484C17.7689 9.35484 18 9.13531 18 8.86452C18 5.07335 14.7649 2 10.7742 2Z"
                                            fill="#E4E5EA"/>
                                        <path
                                            d="M4.1673 3.59966C4.45986 3.4568 4.97514 3.3844 5.27048 3.64579C5.63965 3.97253 6.20861 4.54529 6.59951 5.04502C6.9904 5.54475 7.53764 6.30588 7.61582 6.47502C7.694 6.64416 7.78086 7.24384 7.38997 7.60518C7.07726 7.89425 6.669 8.15104 6.50395 8.2433C6.35049 8.37143 6.09916 8.74764 6.32154 9.22738C6.59951 9.82706 7.19887 11.0033 8.23256 11.8798C9.26625 12.7562 10.3607 13.2175 11.047 13.3636C11.0906 13.3636 11.1467 13.3735 11.2116 13.385C11.4441 13.426 11.7906 13.4872 12.0894 13.1868C12.3951 12.8793 12.6742 12.5564 12.7756 12.4333C12.9348 12.2693 13.3975 11.9905 13.9743 12.1873C14.6953 12.4333 15.5205 12.9715 15.894 13.2252C16.1928 13.4282 16.8582 13.9095 17.1536 14.1247C17.3331 14.2554 17.6331 14.6445 17.3968 15.1549C17.1014 15.7931 15.8419 17.2 14.7127 17.2C14.2957 17.2 10.2652 16.116 6.70374 13.0561C4.42881 11.1015 2.47054 7.71025 2.13466 6.56728C2.00726 6.29563 1.8567 5.62625 2.27365 5.12191C2.6906 4.61756 3.15968 4.09169 4.1673 3.59966Z"
                                            fill="#E4E5EA"/>
                                        <path
                                            d="M10.7742 5.92258C10.4891 5.92258 10.2581 6.14211 10.2581 6.4129C10.2581 6.6837 10.4891 6.90323 10.7742 6.90323C11.9144 6.90323 12.8387 7.78133 12.8387 8.86452C12.8387 9.13531 13.0698 9.35484 13.3548 9.35484C13.6399 9.35484 13.871 9.13531 13.871 8.86452C13.871 7.23973 12.4845 5.92258 10.7742 5.92258Z"
                                            fill="#E4E5EA"/>
                                        <path
                                            d="M10.2581 4.45161C10.2581 4.18082 10.4891 3.96129 10.7742 3.96129C13.6247 3.96129 15.9355 6.15654 15.9355 8.86452C15.9355 9.13531 15.7044 9.35484 15.4194 9.35484C15.1343 9.35484 14.9032 9.13531 14.9032 8.86452C14.9032 6.69813 13.0546 4.94194 10.7742 4.94194C10.4891 4.94194 10.2581 4.72241 10.2581 4.45161Z"
                                            fill="#E4E5EA"/>
                                    </svg>
                                </div>
                                <div className={`${s.contacts_media_icon} ${s.contacts_media_icon_whatsapp}`}>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M15.6687 4.32548C14.9307 3.58614 14.0527 2.99991 13.0854 2.60073C12.1181 2.20155 11.0808 1.99738 10.0337 2.00003C5.64281 2.00003 2.06833 5.55666 2.06656 9.92847C2.06656 11.3257 2.43305 12.6893 3.12967 13.8923L2 18L6.22318 16.8969C7.39135 17.5298 8.70011 17.8616 10.0302 17.8622H10.0337C14.4237 17.8622 17.9982 14.3056 18 9.93377C18.003 8.89203 17.7985 7.86002 17.3984 6.8974C16.9982 5.93478 16.4104 5.06063 15.6687 4.32548ZM10.0337 16.5242H10.031C8.84504 16.5243 7.68086 16.2067 6.66067 15.6048L6.41929 15.4617L3.91325 16.1161L4.58147 13.6847L4.4244 13.4356C3.76132 12.385 3.4103 11.1692 3.41187 9.92847C3.41364 6.29501 6.3838 3.33895 10.0364 3.33895C10.9062 3.33703 11.7679 3.50683 12.5714 3.83853C13.3749 4.17023 14.1043 4.65725 14.7174 5.27138C15.3339 5.88259 15.8224 6.60933 16.1549 7.4096C16.4875 8.20986 16.6573 9.06779 16.6547 9.93377C16.6529 13.5672 13.6827 16.5242 10.0337 16.5242ZM13.6659 11.588C13.4662 11.4882 12.4883 11.0095 12.3055 10.9433C12.1236 10.877 11.9913 10.8443 11.8582 11.0422C11.7251 11.24 11.3435 11.686 11.2273 11.8185C11.111 11.951 10.9948 11.9669 10.796 11.868C10.5972 11.7691 9.95561 11.5597 9.1951 10.885C8.6032 10.3595 8.20387 9.71121 8.08762 9.51249C7.97137 9.31377 8.0752 9.2069 8.17547 9.10799C8.2651 9.01967 8.37425 8.87659 8.47364 8.76089C8.57303 8.64519 8.60587 8.56305 8.67242 8.43057C8.73898 8.29809 8.70614 8.1824 8.65556 8.08348C8.60587 7.98368 8.20742 7.00863 8.04147 6.61207C7.88085 6.22788 7.71668 6.27911 7.59422 6.27381C7.46739 6.26865 7.34046 6.26629 7.21352 6.26674C7.11258 6.2693 7.01327 6.29259 6.9218 6.33515C6.83033 6.3777 6.74868 6.4386 6.68196 6.51404C6.49916 6.71276 5.98535 7.19145 5.98535 8.1665C5.98535 9.14155 6.69883 10.0839 6.79821 10.2164C6.8976 10.3489 8.2021 12.3493 10.1988 13.2078C10.6744 13.4118 11.0454 13.5337 11.3338 13.6255C11.8103 13.7766 12.2442 13.7545 12.5877 13.7041C12.9701 13.6476 13.7653 13.2254 13.9312 12.7626C14.0971 12.2999 14.0971 11.9033 14.0475 11.8203C13.9978 11.7373 13.8638 11.6869 13.6659 11.588Z"
                                              fill="#E4E5EA"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={s.header_welbex_logo_description}>
                        крупный интегратор CRM в России и еще 8 странах
                    </div>
                </div>
                <div className={s.mobile_header}>
                    <div className={s.mobile_header_menu_services_items_list}>
                        <div className={s.mobile_header_menu_services_item}>Услуги</div>
                        <div className={s.mobile_header_menu_services_item}>Виджеты</div>
                        <div className={s.mobile_header_menu_services_item}>Интеграции</div>
                        <div className={s.mobile_header_menu_services_item}>Кейсы</div>
                    </div>
                </div>

                <div className={s.content}>

                    <div className={s.left_block}>
                        <div className={s.left_block_title}>
                            <div className={s.left_block_title_text_part_1}>
                                Зарабатывайте больше
                            </div>
                            <div className={s.left_block_title_text_part_2}>
                            <span
                                className={`${s.left_block_tile_welbex_text} ${s.left_block_tile_welbex_text_part_1}`}>с</span>
                                <span
                                    className={`${s.left_block_tile_welbex_text} ${s.left_block_tile_welbex_text_part_2}`}> Welbex</span>
                            </div>
                        </div>
                        <div className={s.left_block_subtitle}>
                            Развиваем и контролируем продажи за вас
                        </div>
                    </div>

                    <div className={s.right_block}>
                        <div className={s.right_block_title}>
                            <span
                                className={`${s.right_block_title_text} ${s.right_block_title_white_text} ${s.right_block_title_part_1}`}>Вместе с</span>
                            <span
                                className={`${s.right_block_title_text} ${s.right_block_title_gradient_text} ${s.right_block_title_part_2}`}> бесплатной</span>
                            <span
                                className={`${s.right_block_title_text} ${s.right_block_title_gradient_text} ${s.right_block_title_part_3}`}> консультацией</span>
                            <span
                                className={`${s.right_block_title_text} ${s.right_block_title_white_text} ${s.right_block_title_part_4}`}> мы дарим:</span>
                        </div>
                        <div className={s.right_block_gifts_list}>
                            <div className={s.right_block_gift}>
                                <div className={s.right_block_gift_title}>
                                    Виджеты
                                </div>
                                <div className={s.right_block_gift_text}>
                                    30 готовых решений
                                </div>
                            </div>
                            <div className={s.right_block_gift}>
                                <div className={s.right_block_gift_title}>
                                    Dashboard
                                </div>
                                <div className={s.right_block_gift_text}>
                                    с показателями вашего бизнеса
                                </div>
                            </div>
                            <div className={s.right_block_gift}>
                                <div className={s.right_block_gift_title}>
                                    Skype аудит
                                </div>
                                <div className={s.right_block_gift_text}>
                                    отдела продаж и CRM системы
                                </div>
                            </div>
                            <div className={s.right_block_gift}>
                                <div className={s.right_block_gift_title}>
                                    35 дней
                                </div>
                                <div className={s.right_block_gift_text}>
                                    использования CRM
                                </div>
                            </div>
                        </div>
                        <div className={s.right_block_button_consultation_container}>
                            <button className={s.right_block_button_consultation_button}>
                                Получить консультацию
                            </button>
                        </div>
                    </div>
                    <div className={s.mobile_right_block}>
                        <div className={s.mobile_right_block_title}>
                                <span
                                    className={`${s.mobile_right_block_title_text} ${s.mobile_right_block_title_white_text} ${s.mobile_right_block_title_part_1}`}>Вместе с</span>
                            <span
                                className={`${s.mobile_right_block_title_text} ${s.mobile_right_block_title_gradient_text} ${s.mobile_right_block_title_part_2}`}> бесплатной</span>
                            <span
                                className={`${s.mobile_right_block_title_text} ${s.mobile_right_block_title_gradient_text} ${s.mobile_right_block_title_part_3}`}> консультацией</span>
                            <span
                                className={`${s.mobile_right_block_title_text} ${s.mobile_right_block_title_white_text} ${s.mobile_right_block_title_part_4}`}> мы дарим:</span>
                        </div>
                        <div className={s.mobile_right_block_gifts_list}>
                            <div className={s.mobile_right_block_gift}>
                                <span className={s.mobile_right_block_gift_dash}>
                                    -
                                </span>
                                <span className={s.mobile_right_block_gift_text}>
                                    Skype аудит
                                </span>
                            </div>
                            <div className={s.mobile_right_block_gift}>
                                <span className={s.mobile_right_block_gift_dash}>
                                    -
                                </span>
                                <span className={s.mobile_right_block_gift_text}>
                                    30 виджетов
                                </span>
                            </div>
                            <div className={s.mobile_right_block_gift}>
                                <span className={s.mobile_right_block_gift_dash}>
                                    -
                                </span>
                                <span className={s.mobile_right_block_gift_text}>
                                    DashBoard
                                </span>
                            </div>
                            <div className={s.mobile_right_block_gift}>
                                <span className={s.mobile_right_block_gift_dash}>
                                    -
                                </span>
                                <span className={s.mobile_right_block_gift_text}>
                                    Месяц AmoCRM
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={s.footer}>
                    <div className={s.footer_sections}>
                        <div className={`${s.footer_section} ${s.footer_section_about_company}`}>
                            <div className={`${s.footer_section_title} ${s.footer_section_about_company_title}`}>
                                О компании
                            </div>
                            <div
                                className={`${s.footer_section_text_container} ${s.footer_section_about_company_text}`}>
                                <div
                                    className={`${s.footer_section_text} ${s.footer_section_about_company_text_part_1}`}>
                                    Партнерская программа
                                </div>
                                <div
                                    className={`${s.footer_section_text} ${s.footer_section_about_company_text_part_2}`}>
                                    Вакансии
                                </div>
                            </div>
                        </div>

                        <div className={`${s.footer_section} ${s.footer_section_menu}`}>
                            <div className={`${s.footer_section_title} ${s.footer_section_menu_title}`}>
                                Меню
                            </div>
                            <div className={`${s.footer_section_text_container} ${s.footer_section_menu_text}`}>
                                <div className={s.footer_section_text_blocks}>
                                    <div className={s.footer_section_menu_text_block_1}>
                                        <div
                                            className={`${s.footer_section_text} ${s.footer_section_menu_text_block_1_text}`}>
                                            Расчет стоимости
                                        </div>
                                        <div
                                            className={`${s.footer_section_text} ${s.footer_section_menu_text_block_1_text}`}>
                                            Услуги
                                        </div>
                                        <div
                                            className={`${s.footer_section_text} ${s.footer_section_menu_text_block_1_text}`}>
                                            Виджеты
                                        </div>
                                        <div
                                            className={`${s.footer_section_text} ${s.footer_section_menu_text_block_1_text}`}>
                                            Интеграции
                                        </div>
                                        <div
                                            className={`${s.footer_section_text} ${s.footer_section_menu_text_block_1_text}`}>
                                            Наши клиенты
                                        </div>
                                    </div>

                                    <div className={s.footer_section_menu_text_block_2}>
                                        <div
                                            className={`${s.footer_section_text} ${s.footer_section_menu_text_block_2_text}`}>
                                            Кейсы
                                        </div>
                                        <div
                                            className={`${s.footer_section_text} ${s.footer_section_menu_text_block_2_text}`}>
                                            Благодарственные письма
                                        </div>
                                        <div
                                            className={`${s.footer_section_text} ${s.footer_section_menu_text_block_2_text}`}>
                                            Сертификаты
                                        </div>
                                        <div
                                            className={`${s.footer_section_text} ${s.footer_section_menu_text_block_2_text}`}>
                                            Блог на Youtube
                                        </div>
                                        <div
                                            className={`${s.footer_section_text} ${s.footer_section_menu_text_block_2_text}`}>
                                            Вопрос / Ответ
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className={`${s.footer_section} ${s.footer_section_contacts}`}>
                            <div className={`${s.footer_section_title} ${s.footer_section_contacts_title}`}>
                                Контакты
                            </div>
                            <div className={`${s.footer_section_text_container} ${s.footer_section_contacts_text}`}>
                                <div className={`${s.footer_section_text_contacts} ${s.footer_section_contacts_tel}`}>
                                    +7 555 555-55-55
                                </div>
                                <div className={`${s.footer_section_text_contacts} ${s.footer_section_contacts_icons}`}>
                                    <div
                                        className={`${s.footer_section_contacts_icon} ${s.footer_section_contacts_icon_telegram}`}>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M17.2208 3.09753L2.44582 8.79503C1.43748 9.20003 1.44332 9.76253 2.26082 10.0134L6.05415 11.1967L14.8308 5.6592C15.2458 5.4067 15.625 5.54253 15.3133 5.8192L8.20248 12.2367H8.20082L8.20248 12.2375L7.94082 16.1475C8.32415 16.1475 8.49332 15.9717 8.70831 15.7642L10.5508 13.9725L14.3833 16.8034C15.09 17.1925 15.5975 16.9925 15.7733 16.1492L18.2892 4.29253C18.5466 3.26003 17.895 2.79253 17.2208 3.09753Z"
                                                fill="#E4E5EA"/>
                                        </svg>
                                    </div>
                                    <div
                                        className={`${s.footer_section_contacts_icon} ${s.footer_section_contacts_icon_viber}`}>
                                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M10.7742 2C10.4891 2 10.2581 2.21952 10.2581 2.49032C10.2581 2.76112 10.4891 2.98065 10.7742 2.98065C14.1948 2.98065 16.9677 5.61494 16.9677 8.86452C16.9677 9.13531 17.1988 9.35484 17.4839 9.35484C17.7689 9.35484 18 9.13531 18 8.86452C18 5.07335 14.7649 2 10.7742 2Z"
                                                fill="#E4E5EA"/>
                                            <path
                                                d="M4.1673 3.59966C4.45986 3.4568 4.97514 3.3844 5.27048 3.64579C5.63965 3.97253 6.20861 4.54529 6.59951 5.04502C6.9904 5.54475 7.53764 6.30588 7.61582 6.47502C7.694 6.64416 7.78086 7.24384 7.38997 7.60518C7.07726 7.89425 6.669 8.15104 6.50395 8.2433C6.35049 8.37143 6.09916 8.74764 6.32154 9.22738C6.59951 9.82706 7.19887 11.0033 8.23256 11.8798C9.26625 12.7562 10.3607 13.2175 11.047 13.3636C11.0906 13.3636 11.1467 13.3735 11.2116 13.385C11.4441 13.426 11.7906 13.4872 12.0894 13.1868C12.3951 12.8793 12.6742 12.5564 12.7756 12.4333C12.9348 12.2693 13.3975 11.9905 13.9743 12.1873C14.6953 12.4333 15.5205 12.9715 15.894 13.2252C16.1928 13.4282 16.8582 13.9095 17.1536 14.1247C17.3331 14.2554 17.6331 14.6445 17.3968 15.1549C17.1014 15.7931 15.8419 17.2 14.7127 17.2C14.2957 17.2 10.2652 16.116 6.70374 13.0561C4.42881 11.1015 2.47054 7.71025 2.13466 6.56728C2.00726 6.29563 1.8567 5.62625 2.27365 5.12191C2.6906 4.61756 3.15968 4.09169 4.1673 3.59966Z"
                                                fill="#E4E5EA"/>
                                            <path
                                                d="M10.7742 5.92258C10.4891 5.92258 10.2581 6.14211 10.2581 6.4129C10.2581 6.6837 10.4891 6.90323 10.7742 6.90323C11.9144 6.90323 12.8387 7.78133 12.8387 8.86452C12.8387 9.13531 13.0698 9.35484 13.3548 9.35484C13.6399 9.35484 13.871 9.13531 13.871 8.86452C13.871 7.23973 12.4845 5.92258 10.7742 5.92258Z"
                                                fill="#E4E5EA"/>
                                            <path
                                                d="M10.2581 4.45161C10.2581 4.18082 10.4891 3.96129 10.7742 3.96129C13.6247 3.96129 15.9355 6.15654 15.9355 8.86452C15.9355 9.13531 15.7044 9.35484 15.4194 9.35484C15.1343 9.35484 14.9032 9.13531 14.9032 8.86452C14.9032 6.69813 13.0546 4.94194 10.7742 4.94194C10.4891 4.94194 10.2581 4.72241 10.2581 4.45161Z"
                                                fill="#E4E5EA"/>
                                        </svg>
                                    </div>
                                    <div
                                        className={`${s.footer_section_contacts_icon} ${s.footer_section_contacts_icon_whatsapp}`}>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M15.6687 4.32548C14.9307 3.58614 14.0527 2.99991 13.0854 2.60073C12.1181 2.20155 11.0808 1.99738 10.0337 2.00003C5.64281 2.00003 2.06833 5.55666 2.06656 9.92847C2.06656 11.3257 2.43305 12.6893 3.12967 13.8923L2 18L6.22318 16.8969C7.39135 17.5298 8.70011 17.8616 10.0302 17.8622H10.0337C14.4237 17.8622 17.9982 14.3056 18 9.93377C18.003 8.89203 17.7985 7.86002 17.3984 6.8974C16.9982 5.93478 16.4104 5.06063 15.6687 4.32548ZM10.0337 16.5242H10.031C8.84504 16.5243 7.68086 16.2067 6.66067 15.6048L6.41929 15.4617L3.91325 16.1161L4.58147 13.6847L4.4244 13.4356C3.76132 12.385 3.4103 11.1692 3.41187 9.92847C3.41364 6.29501 6.3838 3.33895 10.0364 3.33895C10.9062 3.33703 11.7679 3.50683 12.5714 3.83853C13.3749 4.17023 14.1043 4.65725 14.7174 5.27138C15.3339 5.88259 15.8224 6.60933 16.1549 7.4096C16.4875 8.20986 16.6573 9.06779 16.6547 9.93377C16.6529 13.5672 13.6827 16.5242 10.0337 16.5242ZM13.6659 11.588C13.4662 11.4882 12.4883 11.0095 12.3055 10.9433C12.1236 10.877 11.9913 10.8443 11.8582 11.0422C11.7251 11.24 11.3435 11.686 11.2273 11.8185C11.111 11.951 10.9948 11.9669 10.796 11.868C10.5972 11.7691 9.95561 11.5597 9.1951 10.885C8.6032 10.3595 8.20387 9.71121 8.08762 9.51249C7.97137 9.31377 8.0752 9.2069 8.17547 9.10799C8.2651 9.01967 8.37425 8.87659 8.47364 8.76089C8.57303 8.64519 8.60587 8.56305 8.67242 8.43057C8.73898 8.29809 8.70614 8.1824 8.65556 8.08348C8.60587 7.98368 8.20742 7.00863 8.04147 6.61207C7.88085 6.22788 7.71668 6.27911 7.59422 6.27381C7.46739 6.26865 7.34046 6.26629 7.21352 6.26674C7.11258 6.2693 7.01327 6.29259 6.9218 6.33515C6.83033 6.3777 6.74868 6.4386 6.68196 6.51404C6.49916 6.71276 5.98535 7.19145 5.98535 8.1665C5.98535 9.14155 6.69883 10.0839 6.79821 10.2164C6.8976 10.3489 8.2021 12.3493 10.1988 13.2078C10.6744 13.4118 11.0454 13.5337 11.3338 13.6255C11.8103 13.7766 12.2442 13.7545 12.5877 13.7041C12.9701 13.6476 13.7653 13.2254 13.9312 12.7626C14.0971 12.2999 14.0971 11.9033 14.0475 11.8203C13.9978 11.7373 13.8638 11.6869 13.6659 11.588Z"
                                                  fill="#E4E5EA"/>
                                        </svg>
                                    </div>
                                </div>
                                <div
                                    className={`${s.footer_section_text_contacts} ${s.footer_section_contacts_address}`}>
                                    Москва, Путевой проезд 3с1, к 902
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={s.footer_privacy_policy}>
                        <div className={`${s.footer_privacy_policy_text} ${s.footer_privacy_policy_text_part_1}`}>
                            WELBEX 2022. Все права защищены.
                        </div>
                        <div className={`${s.footer_privacy_policy_text} ${s.footer_privacy_policy_text_part_2}`}>
                            Политика конфиденциальности.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
