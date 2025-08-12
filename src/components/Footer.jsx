import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  return (
    <footer>
      <div className="w-full h-1 bg-red-500"></div>
      <div className="bg-white px-14 py-10 grid-cols-5 grid gap-8 text-gray-700  ">
        <div className="py-3 ">
          <h3 className="font-semibold ">CUSTOMER SERVICE</h3>
          <ul className="space-y-2 py-5 text-sm opacity-60">
            <li className="hover:text-red-700 cursor-pointer ">
              Shopee Help Center
            </li>
            <li className="hover:text-red-700 cursor-pointer ">Shopee Blog</li>
            <li className="hover:text-red-700 cursor-pointer ">Shopee Mall</li>
            <li className="hover:text-red-700 cursor-pointer ">
              Purchase/Order Guide
            </li>
            <li className="hover:text-red-700 cursor-pointer ">Sales Guide</li>
            <li className="hover:text-red-700 cursor-pointer ">
              ShopeePay Wallet
            </li>
            <li className="hover:text-red-700 cursor-pointer ">Shopee Coins</li>
            <li className="hover:text-red-700 cursor-pointer ">Order</li>
            <li className="hover:text-red-700 cursor-pointer ">
              Returns/Refunds
            </li>
            <li className="hover:text-red-700 cursor-pointer ">
              Contact Shopee
            </li>
            <li className="hover:text-red-700 cursor-pointer ">
              Warranty Policy
            </li>
          </ul>
        </div>

        <div className="py-3">
          <h3 className="font-semibold">SHOPEE VIETNAM</h3>
          <ul className="space-y-2 py-5 text-sm opacity-60">
            <li className="hover:text-red-700 cursor-pointer ">About Shopee</li>
            <li className="hover:text-red-700 cursor-pointer ">Recruitment</li>
            <li className="hover:text-red-700 cursor-pointer ">Shopee Terms</li>
            <li className="hover:text-red-700 cursor-pointer ">
              Privacy Policy
            </li>
            <li className="hover:text-red-700 cursor-pointer ">Shopee Mall</li>
            <li className="hover:text-red-700 cursor-pointer ">
              Seller Channel
            </li>
            <li className="hover:text-red-700 cursor-pointer ">Flash Sale</li>
            <li className="hover:text-red-700 cursor-pointer ">
              Affiliate Marketing
            </li>
            <li className="hover:text-red-700 cursor-pointer ">
              Media Contact
            </li>
          </ul>
        </div>

        <div className="py-3">
          <h3 className="font-semibold ">PAY</h3>
          <div className="grid grid-cols-3 gap-2 gap-x-0  mb-4 mt-5">
            <img
              className="shadow-[0_0.1rem_0.2rem_0_rgba(0,0,0,0.3)] w-[60px] h-[30px]]"
              src="https://down-vn.img.susercontent.com/file/d4bbea4570b93bfd5fc652ca82a262a8"
              alt="Visa"
            />
            <img
              className="shadow-[0_0.1rem_0.2rem_0_rgba(0,0,0,0.3)] w-[60px] h-[30px]"
              src="https://down-vn.img.susercontent.com/file/a0a9062ebe19b45c1ae0506f16af5c16"
              alt=""
            />
            <img
              className="shadow-[0_0.1rem_0.2rem_0_rgba(0,0,0,0.3)] w-[60px] h-[30px]"
              src="https://down-vn.img.susercontent.com/file/38fd98e55806c3b2e4535c4e4a6c4c08"
              alt=""
            />
            <img
              className="shadow-[0_0.1rem_0.2rem_0_rgba(0,0,0,0.3)] w-[60px] h-[30px]"
              src="https://down-vn.img.susercontent.com/file/bc2a874caeee705449c164be385b796c"
              alt=""
            />
            <img
              className="shadow-[0_0.1rem_0.2rem_0_rgba(0,0,0,0.3)] w-[60px] h-[30px]"
              src="https://down-vn.img.susercontent.com/file/2c46b83d84111ddc32cfd3b5995d9281"
              alt=""
            />
            <img
              className="shadow-[0_0.1rem_0.2rem_0_rgba(0,0,0,0.3)] w-[60px] h-[30px]"
              src="https://down-vn.img.susercontent.com/file/5e3f0bee86058637ff23cfdf2e14ca09"
              alt=""
            />
            <img
              className="shadow-[0_0.1rem_0.2rem_0_rgba(0,0,0,0.3)] w-[60px] h-[30px]"
              src="https://down-vn.img.susercontent.com/file/9263fa8c83628f5deff55e2a90758b06"
              alt=""
            />
            <img
              className="shadow-[0_0.1rem_0.2rem_0_rgba(0,0,0,0.3)] w-[60px] h-[30px]"
              src="https://down-vn.img.susercontent.com/file/0217f1d345587aa0a300e69e2195c492"
              alt=""
            />
          </div>
          <h3 className="font-semibold ">TRANSPORTATION UNIT</h3>
          <div className="grid grid-cols-3 gap-2 gap-x-0 mt-5 mb-4 ">
            <img
              src="https://down-vn.img.susercontent.com/file/vn-11134258-7ras8-m20rc1wk8926cf"
              alt="SPX"
              className="shadow-[0_0.1rem_0.2rem_0_rgba(0,0,0,0.3)] w-[60px] h-auto"
            />
            <img
              src="https://down-vn.img.susercontent.com/file/vn-50009109-64f0b242486a67a3d29fd4bcf024a8c6"
              alt="Viettel"
              className="shadow-[0_0.1rem_0.2rem_0_rgba(0,0,0,0.3)] w-[60px] h-auto"
            />
            <img
              src="https://down-vn.img.susercontent.com/file/59270fb2f3fbb7cbc92fca3877edde3f"
              alt="Viettel"
              className="shadow-[0_0.1rem_0.2rem_0_rgba(0,0,0,0.3)] w-[60px] h-auto"
            />
            <img
              src="https://down-vn.img.susercontent.com/file/957f4eec32b963115f952835c779cd2c"
              alt="Viettel"
              className="shadow-[0_0.1rem_0.2rem_0_rgba(0,0,0,0.3)] w-[60px] h-auto"
            />
            <img
              src="https://down-vn.img.susercontent.com/file/0d349e22ca8d4337d11c9b134cf9fe63"
              alt="Viettel"
              className=" shadow-[0_0.1rem_0.2rem_0_rgba(0,0,0,0.3)] w-[60px] h-auto"
            />
            <img
              src="https://down-vn.img.susercontent.com/file/3900aefbf52b1c180ba66e5ec91190e5"
              alt="Viettel"
              className=" shadow-[0_0.1rem_0.2rem_0_rgba(0,0,0,0.3)] w-[60px] h-auto"
            />
            <img
              src="https://down-vn.img.susercontent.com/file/6e3be504f08f88a15a28a9a447d94d3d"
              alt="Viettel"
              className=" shadow-[0_0.1rem_0.2rem_0_rgba(0,0,0,0.3)] w-[60px] h-auto"
            />
            <img
              src="https://down-vn.img.susercontent.com/file/0b3014da32de48c03340a4e4154328f6"
              alt="Viettel"
              className=" shadow-[0_0.1rem_0.2rem_0_rgba(0,0,0,0.3)] w-[60px] h-auto"
            />
            <img
              src="https://down-vn.img.susercontent.com/file/vn-50009109-ec3ae587db6309b791b78eb8af6793fd"
              alt="Viettel"
              className=" shadow-[0_0.1rem_0.2rem_0_rgba(0,0,0,0.3)] w-[60px] h-auto"
            />
          </div>
        </div>

        <div className="py-3">
          <h3 className="font-semibold">FOLLOW SHOPPE</h3>
          <ul className="space-y-3 mt-6 text-sm cursor-pointer opacity-60">
            <li className="flex items-center gap-2 hover:text-red-700">
              <FontAwesomeIcon icon={faFacebook} /> Facebook
            </li>
            <li className="flex items-center gap-2 hover:text-red-700">
              <FontAwesomeIcon icon={faInstagram} /> Instagram
            </li>
            <li className="flex items-center gap-2 hover:text-red-700">
              <FontAwesomeIcon icon={faLinkedin} /> Linkedin
            </li>
          </ul>
        </div>
        <div className="py-3">
          <h3 className="font-semibold">DOWNLOAD SHOPEE APP </h3>
          <div className="flex mt-5 cursor-pointer ">
            <img src="https://down-vn.img.susercontent.com/file/a5e589e8e118e937dc660f224b9a1472" alt="QR" className="bg-white shadow-[0_0.1rem_0.2rem_0_rgba(0,0,0,0.2)]   " />
            <div className="grid-rows-3 grid gap-2 ml-3">
              <img src="https://down-vn.img.susercontent.com/file/ad01628e90ddf248076685f73497c163" alt="" className="bg-white shadow-[0_0.1rem_0.2rem_0_rgba(0,0,0,0.2)] h-6" />
              <img src="https://down-vn.img.susercontent.com/file/ae7dced05f7243d0f3171f786e123def" alt="" className="bg-white shadow-[0_0.1rem_0.2rem_0_rgba(0,0,0,0.2)] h-6" />
              <img src="https://down-vn.img.susercontent.com/file/35352374f39bdd03b25e7b83542b2cb0" alt="" className="bg-white shadow-[0_0.1rem_0.2rem_0_rgba(0,0,0,0.2)] h-6"/>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
