ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
          center: [55.75846806898367,37.60108849999989],
          zoom: 16
      }, {
          searchControlProvider: 'yandex#search'
      }),

      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),



      myPlacemarkWithContent = new ymaps.Placemark([55.75846806898367,37.60108849999989], {
          // balloonContent: 'А эта — новогодняя',
          // iconContent: '12'
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#imageWithContent',
          // Своё изображение иконки метки.
          iconImageHref: 'img/map-icon.png',
          // Размеры метки.
          iconImageSize: [20, 20],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [0, 0],
          // Смещение слоя с содержимым относительно слоя с картинкой.
          iconContentOffset: [20, 20],
          // Макет содержимого.
          iconContentLayout: MyIconContentLayout
      });

  myMap.geoObjects
      .add(myPlacemarkWithContent);
});
