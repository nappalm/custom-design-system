import Origin from './menu';
import Item from './item';
import './index.less';

export type MenuProps = typeof Origin & {
  Item: typeof Item
}

const Menu = Origin as MenuProps;
Menu.Item = Item;

export default Menu;
