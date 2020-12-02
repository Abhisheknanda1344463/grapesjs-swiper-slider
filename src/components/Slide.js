import constants from '../constants';
import { elHasClass } from '../utils';

export default (dc, config = {}) => {
  const defaultType = dc.getType('default');
  const defaultModel = defaultType.model;
  const defaultView = defaultType.view;
  const { slideName, wrapperSelector } = constants;

  dc.addType(slideName, {

    model: defaultModel.extend({
      defaults: {
        ...defaultModel.prototype.defaults,
        name: 'Slide',
        draggable: wrapperSelector,
        ...config.slideProps
      },
      init(){
        this.addStyle({ "font-size": "25px" });
        this.addStyle({ "text-align": "center" });
        this.addStyle({ "width": "214.667px !important" });
        this.addStyle({ "margin-right": "30px" });
      },
    }, {
      isComponent(el) {
        if (elHasClass(el, config.classSlide)) return { type: slideName };
      },
    }),

    view: defaultView
  });
}
