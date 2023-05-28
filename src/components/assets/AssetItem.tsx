import { Asset } from "@/api/assets";
import { formatPrice } from "@/utils/formatPrice";

interface Props {
  asset: Asset;
}

export default function AssetItem({ asset }: Props) {
  return (
    <li className="w-[226px] h-[358px] ">
      <div className="rounded bg-gray-100 h-[268px]"></div>
      <div>
        <div>
          <span>4.9(38k) | </span>
          <span>612k</span>
        </div>
        <h3>{asset.title}</h3>
        <div className="flex justify-between">
          <p> {formatPrice(asset.price)}</p>
          <p> 70%</p>
        </div>
      </div>
    </li>
  );
}
