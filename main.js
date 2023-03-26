(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===e(i)?i:String(i)),o)}var i}var n=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._message=this._popup.querySelector(".error-popup__message")}var n,r;return n=e,(r=[{key:"show",value:function(e){var t=this;this._message.textContent=e,this._popup.style.visibility="visible",this._popup.style.opacity="1",setTimeout((function(){t._popup.style.visibility="hidden",t._popup.style.opacity="0"}),5e3)}}])&&t(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===r(i)?i:String(i)),o)}var i}var i=function(){function e(t,n,r,o,i,u,a){var c=t.name,l=t.link,s=t._id,f=t.owner,p=t.likes;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._text=c,this._image=l,this._cardId=s,this._likes=p,this._ownerId=f._id,this._templateSelector=n,this._handleCardClick=r,this._handleDeleteBtnClick=o,this._likeButton=i,this._disLikeButton=u,this._element=this._getTemplate(),this._currentUser=a,this._imageElement=this._element.querySelector(".card__image"),this._likeButtonElement=this._element.querySelector(".card__like"),this._likeCounterElement=this._element.querySelector(".card__like-count"),this._deleteButton=this._element.querySelector(".card__delete")}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".card").cloneNode(!0)}},{key:"_showLikes",value:function(e){e?this._likeCounterElement.textContent=e:this._likeCounterElement.innerHTML="<span>&nbsp;</span>"}},{key:"_hideDeleteButton",value:function(){this._currentUser!==this._ownerId&&(this._deleteButton.style.display="none")}},{key:"generateCard",value:function(){var e=this;return this._setEventListeners(),this._element.querySelector(".card__title").textContent=this._text,this._showLikes(this._likes.length),this._hideDeleteButton(),this._fillLikeButton(),this._imageElement.src=this._image,this._imageElement.alt=this._text,this._imageElement.onerror=function(){e._imageElement.src="8128ccc049ec8375d3b3.jpg"},this._element}},{key:"_setEventListeners",value:function(){var e=this;this._deleteButton.addEventListener("click",(function(){console.log(e._cardId),e._handleDeleteBtnClick(e._element,e._cardId)})),this._element.querySelector(".card__like").addEventListener("click",(function(){e._handleLikeBtnClick()})),this._imageElement.addEventListener("click",(function(){e._handleCardClick(e._text,e._imageElement.src)}))}},{key:"_isLiked",value:function(){var e=this;return this._likes.some((function(t){return t._id===e._currentUser}))}},{key:"_fillLikeButton",value:function(){this._isLiked()&&this._likeButtonElement.classList.add("card__like_active")}},{key:"_updateLikes",value:function(e){this._likes=e.likes,this._showLikes(e.likes.length)}},{key:"_handleLikeBtnClick",value:function(){var e=this;this._isLiked()?(this._likeButtonElement.classList.remove("card__like_active"),this._disLikeButton(this._cardId).then((function(t){e._updateLikes(t)})).catch((function(e){return console.log(e)}))):(this._likeButtonElement.classList.add("card__like_active"),this._likeButton(this._cardId).then((function(t){e._updateLikes(t)})).catch((function(e){return console.log(e)})))}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==u(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===u(o)?o:String(o)),r)}var o}var c=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(t.inputSelector)),this._buttonElement=this._formElement.querySelector(t.submitButtonSelector),this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass}var t,n;return t=e,(n=[{key:"_getErrorElement",value:function(e){return this._formElement.querySelector(".".concat(e.id).concat(this._errorClass))}},{key:"_showValidationError",value:function(e){e.classList.add(this._inputErrorClass),this._getErrorElement(e).textContent=e.validationMessage}},{key:"_hideValidationError",value:function(e){var t=this._getErrorElement(e);e.classList.remove(this._inputErrorClass),t.textContent=""}},{key:"hideAllValidationErrors",value:function(){var e=this;this._inputList.forEach((function(t){e._hideValidationError(t)}))}},{key:"_isValid",value:function(e){e.validity.valid?this._hideValidationError(e):this._showValidationError(e)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"disableSubmitButton",value:function(){this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.setAttribute("disabled",!0)}},{key:"_enableSubmitButton",value:function(){this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.removeAttribute("disabled")}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this.disableSubmitButton():this._enableSubmitButton()}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._isValid(t),e._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==l(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===l(o)?o:String(o)),r)}var o}var f=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"setItems",value:function(e){this._items=e}},{key:"renderItems",value:function(){var e=this;this._items.forEach((function(t){var n=e._renderer(t);e.appendItem(n)}))}},{key:"prependItem",value:function(e){this._container.prepend(e)}},{key:"appendItem",value:function(e){this._container.append(e)}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),p={formSelector:".form",inputSelector:".form__field",submitButtonSelector:".button",inactiveButtonClass:"button_disabled",inputErrorClass:"form__field_type_error",errorClass:"-field-error"},y=document.querySelector(".profile__avatar-change"),h=document.querySelector(".profile__edit"),d=document.querySelector(".profile__add-card"),m=document.querySelector(".form_type_avatar"),v=document.querySelector(".form_type_profile"),b=document.querySelector(".form_type_card"),_=v.querySelector(".form__field_type_name"),g=v.querySelector(".form__field_type_job");function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==S(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==S(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===S(o)?o:String(o)),r)}var o}var w=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._closeButton=this._popup.querySelector(".popup__close"),this._handleEscClose=this._handleEscClose.bind(this),this.close=this.close.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._closeButton.addEventListener("click",this.close),this._popup.addEventListener("mousedown",(function(t){t.target===e._popup&&e.close()}))}}])&&k(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==E(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==E(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===E(o)?o:String(o)),r)}var o}function O(){return O="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=C(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},O.apply(this,arguments)}function P(e,t){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},P(e,t)}function C(e){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},C(e)}var L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&P(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=C(r);if(o){var n=C(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===E(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupImage=t._popup.querySelector(".popup__image"),t._popupCaption=t._popup.querySelector(".popup__image-title"),t}return t=u,(n=[{key:"open",value:function(e,t){this._popupImage.src=t,this._popupImage.alt=e,this._popupCaption.textContent=e,O(C(u.prototype),"open",this).call(this)}}])&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(w);function B(e){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B(e)}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==B(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==B(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===B(o)?o:String(o)),r)}var o}function T(){return T="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=q(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},T.apply(this,arguments)}function R(e,t){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},R(e,t)}function q(e){return q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},q(e)}var U=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&R(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=q(r);if(o){var n=q(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===B(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._button=n._popup.querySelector(".button"),n._handleDelete=t,n}return t=u,(n=[{key:"setElement",value:function(e){this.element=e}},{key:"setId",value:function(e){this._id=e}},{key:"deleteCard",value:function(){this.element.remove(),this.element=null}},{key:"setEventListeners",value:function(){var e=this;T(q(u.prototype),"setEventListeners",this).call(this),this._button.addEventListener("click",(function(){e._handleDelete(e._id),e.deleteCard(),e.close()}))}}])&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(w);function x(e){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(e)}function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==x(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==x(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===x(o)?o:String(o)),r)}var o}function V(){return V="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=H(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},V.apply(this,arguments)}function D(e,t){return D=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},D(e,t)}function H(e){return H=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},H(e)}var N=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&D(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=H(r);if(o){var n=H(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===x(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._submitHandler=t,n._form=n._popup.querySelector(".form"),n._button=n._form.querySelector(".button"),n}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputList=this._form.querySelectorAll(".form__field"),this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"renderLoading",value:function(e){this._button.textContent=e?"Сохранение...":"Сохранить"}},{key:"setEventListeners",value:function(){var e=this;V(H(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e.renderLoading(!0),e._submitHandler(e._getInputValues()),e.close()}))}},{key:"close",value:function(){V(H(u.prototype),"close",this).call(this),this._form.reset()}}])&&A(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(w);function J(e){return J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},J(e)}function M(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==J(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==J(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===J(o)?o:String(o)),r)}var o}var z=function(){function e(t){var n=t.nameSelector,r=t.descSelector,o=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameElement=document.querySelector(n),this._descElement=document.querySelector(r),this._avatarElement=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._nameElement.textContent,description:this._descElement.textContent}}},{key:"setUserId",value:function(e){this._id=e}},{key:"getUserId",value:function(){return this._id}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about;this._nameElement.textContent=t,this._descElement.textContent=n,console.log(this._id)}},{key:"setUserAvatar",value:function(e){this._avatarElement.src=e}}])&&M(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function $(e){return $="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$(e)}function F(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==$(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==$(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===$(o)?o:String(o)),r)}var o}var G=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.baseUrl=t.baseUrl,this.headers=t.headers}var t,n;return t=e,(n=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Что-то пошло не так. Код ошибки: ".concat(e.status))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this.baseUrl,"/cards"),{headers:this.headers}).then((function(t){return e._checkResponse(t)}))}},{key:"addCard",value:function(e){var t=this;return fetch("".concat(this.baseUrl,"/cards"),{method:"POST",headers:this.headers,body:JSON.stringify(e)}).then((function(e){return t._checkResponse(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this.headers}).then((function(e){return t._checkResponse(e)}))}},{key:"getUserData",value:function(){var e=this;return fetch("".concat(this.baseUrl,"/users/me"),{headers:this.headers}).then((function(t){return e._checkResponse(t)}))}},{key:"changeProfileData",value:function(e){var t=this;return fetch("".concat(this.baseUrl,"/users/me"),{method:"PATCH",headers:this.headers,body:JSON.stringify(e)}).then((function(e){return t._checkResponse(e)}))}},{key:"changeAvatar",value:function(e){var t=this;return fetch("".concat(this.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this.headers,body:JSON.stringify(e)}).then((function(e){return t._checkResponse(e)}))}},{key:"likeCard",value:function(e){var t=this;return fetch("".concat(this.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this.headers}).then((function(e){return t._checkResponse(e)}))}},{key:"dislikeCard",value:function(e){var t=this;return fetch("".concat(this.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this.headers}).then((function(e){return t._checkResponse(e)}))}}])&&F(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function K(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Q=new n(".error-popup"),W=new G({baseUrl:"https://mesto.nomoreparties.co/v1/".concat("cohort-63"),headers:{authorization:"99c388b5-8533-40d6-8496-03b24d244eac","Content-Type":"application/json"}}),X=new z({nameSelector:".profile__name",descSelector:".profile__description",avatarSelector:".profile__avatar"}),Y=function(e){return W.likeCard(e).then((function(e){return e})).catch((function(e){return Q.show(e)}))},Z=function(e){return W.dislikeCard(e).then((function(e){return e})).catch((function(e){return Q.show(e)}))},ee=function(e){return new i(e,"#card-template",(function(e,t){ne.open(e,t)}),(function(e,t){re.setElement(e),re.setId(t),re.open()}),Y,Z,X.getUserId()).generateCard()},te=new f({items:[],renderer:ee},".cards__list");Promise.all([W.getUserData(),W.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,u,a=[],c=!0,l=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==t);c=!0);}catch(e){l=!0,o=e}finally{try{if(!c&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(t,n)||function(e,t){if(e){if("string"==typeof e)return K(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?K(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1],u=o.name,a=o.about,c=o.avatar,l=o._id;console.log(o),console.log(i),X.setUserId(l),X.setUserInfo({name:u,about:a}),X.setUserAvatar(c),te.setItems(i),te.renderItems()})).catch((function(e){return Q.show(e)}));var ne=new L(".popup_type_image");ne.setEventListeners();var re=new U(".popup_type_confirmation",(function(e){W.deleteCard(e).then((function(){console.log("Удалено")})).catch((function(e){Q.show(e)}))}));re.setEventListeners();var oe=new N(".popup_type_profile",(function(e){W.changeProfileData(e).then((function(){X.setUserInfo(e)})).catch((function(e){Q.show(e)})).finally((function(){return oe.renderLoading(!1)}))}));oe.setEventListeners();var ie=new N(".popup_type_card",(function(e){var t=e.place,n=e.image;W.addCard({name:t,link:n}).then((function(e){te.prependItem(ee(e))})).catch((function(e){Q.show(e)})).finally((function(){return ie.renderLoading(!1)}))}));ie.setEventListeners();var ue=new N(".popup_type_avatar",(function(e){var t=e.avatar,n=document.querySelector(".profile__avatar");W.changeAvatar({avatar:t}).then((function(){n.src=t})).catch((function(e){Q.show(e)})).finally((function(){return ue.renderLoading(!1)}))}));ue.setEventListeners(),h.addEventListener("click",(function(){oe.open(),ce.hideAllValidationErrors(),ce.disableSubmitButton();var e=X.getUserInfo(),t=e.name,n=e.description;_.value=t,g.value=n})),y.addEventListener("click",(function(){ue.open(),le.hideAllValidationErrors(),le.disableSubmitButton()})),d.addEventListener("click",(function(){ie.open(),le.hideAllValidationErrors(),le.disableSubmitButton()}));var ae=new c(p,m),ce=new c(p,v),le=new c(p,b);ae.enableValidation(),ce.enableValidation(),le.enableValidation()})();