<PopoverContent>
    <img :src="item.img" :alt="item.name + ' Image'" />
    <h2 class="itemName">{{ item.name }}</h2>
    <span class="itemBuySell">Buy: {{ item.buy }} / Sell: {{ item.sell }}</span>
    <span class="itemStats">Stats: {{ item.stats }}</span>
    <span class="itemPassive">Passive: {{ item.passive }}</span>
    <span class="itemActive">Active: {{ item.active }}</span>
  </PopoverContent>
</Popover>