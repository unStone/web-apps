/*
 *
 * (c) Copyright Ascensio System Limited 2010-2019
 *
 * This program is a free software product. You can redistribute it and/or
 * modify it under the terms of the GNU Affero General Public License (AGPL)
 * version 3 as published by the Free Software Foundation. In accordance with
 * Section 7(a) of the GNU AGPL its Section 15 shall be amended to the effect
 * that Ascensio System SIA expressly excludes the warranty of non-infringement
 * of any third-party rights.
 *
 * This program is distributed WITHOUT ANY WARRANTY; without even the implied
 * warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR  PURPOSE. For
 * details, see the GNU AGPL at: http://www.gnu.org/licenses/agpl-3.0.html
 *
 * You can contact Ascensio System SIA at Lubanas st. 125a-25, Riga, Latvia,
 * EU, LV-1021.
 *
 * The  interactive user interfaces in modified source and object code versions
 * of the Program must display Appropriate Legal Notices, as required under
 * Section 5 of the GNU AGPL version 3.
 *
 * Pursuant to Section 7(b) of the License you must retain the original Product
 * logo when distributing the program. Pursuant to Section 7(e) we decline to
 * grant you any rights under trademark law for use of our trademarks.
 *
 * All the Product's GUI elements, including illustrations and icon sets, as
 * well as technical writing content are licensed under the terms of the
 * Creative Commons Attribution-ShareAlike 4.0 International. See the License
 * terms at http://creativecommons.org/licenses/by-sa/4.0/legalcode
 *
 */

/**
 *  utils.js
 *
 *  Created by Alexander Yuzhin on 1/11/17
 *  Copyright (c) 2018 Ascensio System SIA. All rights reserved.
 *
 */

var browser;

module.exports = {
    init: function (client) {
        browser = client;
    },

    openEditor: function (url) {
        browser
            .url(url)
            .waitForElementVisible('body', 1000)
            .frame(0) // Deep into editor iframe
                .waitForElementPresent('.modal-preloader', 1000)
                .waitForElementNotPresent('.modal-preloader', 10000);
            //     .frame(null); // Exit from iframe
            // .end(); // Close browser

        return browser;
    },

    canvasClick: function (x, y) {
        browser
            .moveToElement('#area_id_main', x, y)
            .mouseButtonDown('left')
            .mouseButtonUp('left');

        return browser;
    },

    isPresent: function (selector) {
        return browser.expect.element(selector).to.be.present;
    },

    hasClass: function (selector, className) {
        return browser.expect.element(selector).to.have.attribute('class').which.contains(className);
    },

    hasNoClass: function (selector, className) {
        return browser.expect.element(selector).to.not.have.attribute('class').which.contains(className);
    }
};