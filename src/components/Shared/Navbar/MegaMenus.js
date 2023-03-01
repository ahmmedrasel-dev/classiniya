import React from 'react';
import { BsFillCaretDownFill } from 'react-icons/bs';
import './mega_menu.css'

const MegaMenus = ({ menu }) => {
  return (
    <ul class="main-menu flex justify-end gap-6">

      {
        menu.length > 0 && menu.map((menus) => (
          <li
            class="static"
            key={menus._id}
          ><a href={`/${menus.link}`} className='flex items-center gap-1'>{menus.main_menu} {menus.mega_menu.length > 0 && <BsFillCaretDownFill className='text-gray text-[13px]' />}</a>
            <div class="mega_full">
              <div class="grid grid-cols-4 gap-4 justify-between">
                {
                  menus.mega_menu.length > 0 && menus.mega_menu.map((megaItem, index) => (
                    <ul class="mega_item">
                      <li class="menu_title">{megaItem.mega_title}</li>
                      {
                        megaItem?.mega_item.length > 0 && megaItem?.mega_item.map(item => <li><a href="#">{item}</a></li>)
                      }
                    </ul>
                  ))
                }
              </div>
            </div>
          </li>
        ))
      }
    </ul>
  );
};

export default MegaMenus;