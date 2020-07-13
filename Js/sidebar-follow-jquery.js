/**
 * @author: mg12 [http://www.neoease.com/]
 * @update: 2012/12/05
 */

SidebarFollow = function() {

	this.config = {
		element: null, // 處理的節點
		distanceToTop: 0 // 節點上邊到頁面頂部的距離
	};

	this.cache = {
		originalToTop: 0, // 原本到頁面頂部的距離
		prevElement: null, // 上一個節點
		parentToTop: 0, // 父節點的上邊到頂部距離
		placeholder: jQuery('<div>') // 占位節點
	}
};

SidebarFollow.prototype = {

	init: function(config) {
		this.config = config || this.config;
		var _self = this;
		var element = jQuery(_self.config.element);

		// 如果沒有找到節點, 不進行處理
		if(element.length <= 0) {
			return;
		}

		// 獲取上一個節點
		var prevElement = element.prev();
		while(prevElement.is(':hidden')) {
			prevElement = prevElement.prev();
			if(prevElement.length <= 0) {
				break;
			}
		}
		_self.cache.prevElement = prevElement;

		// 計算父節點的上邊到頂部距離
		var parent = element.parent();
		var parentToTop = parent.offset().top;
		var parentBorderTop = parent.css('border-top');
		var parentPaddingTop = parent.css('padding-top');
		_self.cache.parentToTop = parentToTop + parentBorderTop + parentPaddingTop;

		// 滾動屏幕
		jQuery(window).scroll(function() {
			_self._scrollScreen({element:element, _self:_self});
		});

		// 改變屏幕尺寸
		jQuery(window).resize(function() {
			_self._scrollScreen({element:element, _self:_self});
		});
	},

	/**
	 * 修改節點位置
	 */
	_scrollScreen: function(args) {
		var _self = args._self;
		var element = args.element;
		var prevElement = _self.cache.prevElement;

		// 獲得到頂部的距離
		var toTop = _self.config.distanceToTop;

		// 如果 body 有 top 屬性, 消除這些位移
		var bodyToTop = parseInt(jQuery('body').css('top'), 10);
		if(!isNaN(bodyToTop)) {
			toTop += bodyToTop;
		}

		// 獲得到頂部的絕對距離
		var elementToTop = element.offset().top - toTop;

		// 如果存在上一個節點, 獲得到上一個節點的距離; 否則計算到父節點頂部的距離
		var referenceToTop = 0;
		if(prevElement && prevElement.length === 1) {
			referenceToTop = prevElement.offset().top + prevElement.outerHeight();
		} else {
			referenceToTop = _self.cache.parentToTop - toTop;
		}

		// 當節點進入跟隨區域, 跟隨滾動
		if(jQuery(document).scrollTop() > elementToTop) {
			// 添加占位節點
			var elementHeight = element.outerHeight();
			_self.cache.placeholder.css('height', elementHeight).insertBefore(element);
			// 記錄原位置
			_self.cache.originalToTop = elementToTop;
			// 修改樣式
			element.css({
				top: toTop + 'px',
				position: 'fixed',
				width:$(".widthhhh").width()
			});

		// 否則回到原位
		} else if(_self.cache.originalToTop > elementToTop || referenceToTop > elementToTop) {
			// 刪除占位節點
			_self.cache.placeholder.remove();
			// 修改樣式
			element.css({
				position: 'static'
			});
		}
	}
};