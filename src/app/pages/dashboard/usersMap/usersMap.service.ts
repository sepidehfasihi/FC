import {Injectable} from '@angular/core';
import {BaThemeConfigProvider, layoutPaths} from '../../../theme';

@Injectable()
export class UsersMapService {

  constructor(private _baConfig:BaThemeConfigProvider) {
  }

  getData() {
    var layoutColors = this._baConfig.get().colors;

    return {
      type: 'map',
      theme: 'blur',
      zoomControl: { zoomControlEnabled: false, panControlEnabled: false },

      dataProvider: {
        map: 'worldLow',
        zoomLevel: 3.5,
        zoomLongitude: 53,
        zoomLatitude: 32,
        areas: [
          { title: 'Iran', id: 'IR', color: layoutColors.danger, customData: '1 244', groupId: '1'},
          { title: 'Iraq', id: 'IQ', color: layoutColors.primary, customData: '1 600', groupId: '2'},
          { title: 'Saudi Arabia', id: 'SA', color: layoutColors.primary, customData: '1 700', groupId: '2'},
          { title: 'United Arab Emirates', id: 'AE', color: layoutColors.primary, customData: '1 750', groupId: '2'},
          { title: 'Turkey', id: 'TR', color: layoutColors.primary, customData: '1 750', groupId: '2'},
          { title: 'Afghanistan', id: 'AF', color: layoutColors.primary, customData: '1 750', groupId: '2'},
        ]
      },

      areasSettings: {
        rollOverOutlineColor: layoutColors.border,
        rollOverColor: layoutColors.primaryDark,
        alpha: 0.8,
        unlistedAreasAlpha: 0.2,
        unlistedAreasColor: layoutColors.defaultText,
        balloonText: '[[title]]: [[customData]] users'
      },


      legend: {
        width: '100%',
        marginRight: 27,
        marginLeft: 27,
        equalWidths: false,
        backgroundAlpha: 0.3,
        backgroundColor: layoutColors.border,
        borderColor: layoutColors.border,
        borderAlpha: 1,
        top: 362,
        left: 0,
        horizontalGap: 10,
        data: [
          {
            title: 'over 1 000 users',
            color: layoutColors.primary
          },
          {
            title: '500 - 1 000 users',
            color: layoutColors.successLight
          },
          {
            title: '100 - 500 users',
            color: layoutColors.success
          },
          {
            title: '0 - 100 users',
            color: layoutColors.danger
          }
        ]
      },
      export: {
        enabled: true
      },
      creditsPosition: 'bottom-right',
      pathToImages: layoutPaths.images.amChart
    };
  }
}
