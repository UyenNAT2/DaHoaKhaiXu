import React from 'react';
import { motion } from 'motion/react';
import {
  ArrowLeft,
  Heart,
  Globe2,
  Recycle,
  Sparkles,
  Phone,
  Package,
  Layers,
  Compass,
  Zap,
  GraduationCap,
  Bike,
  Backpack
} from 'lucide-react';
import {
  HERO_IMAGE,
  RECYCLING_WORKSHOP_IMAGE,
  NURSERY_IMAGE,
  EDUCATION_IMAGE,
  PRODUCT_KIT_IMAGE_1,
  PRODUCT_KIT_IMAGE_2,
  PROCESS_TESTING_IMAGE
} from '../data/mockData';

interface MainEducationPortalProps {
  onBackToWelcome: () => void;
}

export const MainEducationPortal: React.FC<MainEducationPortalProps> = ({
  onBackToWelcome,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen bg-[#F6FAF6] text-[#24422D] font-light selection:bg-[#72A285] selection:text-white relative overflow-x-hidden"
    >
      {/* Background Soft Glow Accents */}
      <div className="absolute top-10 left-1/4 w-80 h-80 bg-[#E1F2E6]/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#EAF5ED]/70 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header */}
      <header className="sticky top-0 z-30 bg-[#F6FAF6]/90 backdrop-blur-md border-b border-[#DDECE1]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <motion.button
            whileHover={{ x: -2 }}
            whileTap={{ scale: 0.96 }}
            onClick={onBackToWelcome}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#D5E9DC] text-xs font-normal text-[#3E6D4E] hover:text-[#1D3A24] hover:border-[#86CFA0] transition-colors cursor-pointer shadow-2xs group"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <span>Màn hình chính</span>
          </motion.button>

          <div className="flex items-center gap-2">
            <span className="font-normal text-base text-[#1D3A24]">
              Dã Hoa Khai Xứ
            </span>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#E3F2E7] text-[#2F5E3C] font-normal hidden sm:inline-block">
              FPT Long Vân 🌿
            </span>
          </div>

          {/* Hotline display badge in header (display only, non-clickable) */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#3B734E] text-white text-xs font-normal shadow-2xs select-all">
            <Phone className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Hotline:</span>
            <span className="font-medium">0388759307</span>
          </div>
        </div>
      </header>

      {/* Main Content Body */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-16 relative z-10">
        
        {/* 1. LỜI XIN CHÀO & SLOGAN ĐẦU TRANG (ĐẾN ĐÂY XONG, CHUYỂN SANG PHẦN MỤC ĐÍCH) */}
        <section className="bg-white rounded-3xl border-2 border-[#D5E9DC] p-7 sm:p-10 shadow-sm relative overflow-hidden">
          <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F5EC] text-[#2F5E3C] text-xs font-medium border border-[#C6E4CF]">
              <Heart className="w-3.5 h-3.5 text-[#E05353] fill-[#E05353]" />
              <span>Lời chào nồng nhiệt</span>
            </div>

            <div className="inline-flex items-center gap-1.5 text-xs text-[#528261] font-normal bg-[#F6FAF6] px-3.5 py-1 rounded-full border border-[#DDECE1]">
              <Sparkles className="w-3.5 h-3.5 text-[#EAB308]" />
              <span>Học sinh trường FPT Long Vân</span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-4xl font-light text-[#1D3A24] leading-snug mb-3 tracking-tight">
            Xin chào tất cả mọi người đã đến với trang web của chúng tôi! <span className="inline-block animate-bounce">🌿</span>
          </h1>

          {/* Câu slogan nổi bật ngay đầu trang đúng yêu cầu */}
          <div className="my-5 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#EAF5EE] to-[#E2F0E7] border-l-4 border-[#3B734E] text-[#264D33]">
            <p className="text-base sm:text-xl font-normal tracking-wide leading-relaxed">
              “Từ điều bỏ đi chúng mình gieo mầm xanh, nuôi dưỡng tinh thần và trao cơ hội cho mọi người.”
            </p>
          </div>

          <p className="text-sm sm:text-base font-light text-[#3C6448] leading-relaxed max-w-3xl">
            Tụi mình là các bạn học sinh đến từ trường Tiểu học, THCS và THPT FPT Long Vân. Với niềm đam mê dành cho màu xanh của cỏ cây và môi trường học đường, tụi mình tạo nên không gian trải nghiệm thực tế này để cùng các bạn học sinh biến rác thải thành những điều kỳ diệu!
          </p>
        </section>


        {/* 2. MỤC ĐÍCH DỰ ÁN (3 KHUNG RIÊNG BIỆT - HOVER LIFT & GLOW: y: -8px) */}
        <section className="space-y-5">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#487856] font-medium mb-1">
                <Zap className="w-4 h-4 text-[#EAB308]" />
                <span>Mục đích dự án</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-light text-[#1D3A24]">
                Mục đích dự án của chúng mình
              </h2>
            </div>

            <span className="text-xs text-[#528261] font-light bg-white px-3 py-1.5 rounded-full border border-[#DCEEE1] shadow-2xs">
              💡 Rê chuột vào từng ô để thấy hiệu ứng nổi bật
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            
            {/* Khung 1: Nâng cao ý thức & Lan tỏa đến các trường khác */}
            <div className="bg-white rounded-3xl border-2 border-[#DCEEE1] p-6 sm:p-7 flex flex-col justify-between shadow-xs transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(78,139,98,0.22)] hover:border-[#52A36F] cursor-pointer relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#4E8B62] to-[#7BC997]" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#E8F5EC] text-[#2F5E3C] flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300 shadow-2xs">
                    🌍
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-[#EBF3ED] text-[#3E6D4E] text-[11px] font-medium">
                    Mục tiêu 01
                  </span>
                </div>

                <h3 className="text-lg font-normal text-[#1D3A24] mb-3 leading-snug group-hover:text-[#2F5E3C] transition-colors">
                  Nâng cao ý thức & Lan tỏa đến các trường khác
                </h3>

                <p className="text-xs sm:text-sm font-light text-[#43644D] leading-relaxed">
                  Thay đổi thói quen từ những hành động nhỏ nhất: không vứt rác bừa bãi, tắt bớt thiết bị điện và tái sử dụng đồ đạc. Từ một trường học, tụi mình mong muốn lan tỏa ngọn lửa xanh đến khắp các cơ sở trường học khác trên toàn quốc.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F0F6F1] flex items-center justify-between text-xs text-[#3E6D4E] font-medium">
                <span>Lan tỏa cộng đồng học đường</span>
                <span className="group-hover:translate-x-1.5 transition-transform duration-200">→</span>
              </div>
            </div>

            {/* Khung 2: Workshop tái chế & Trải nghiệm thực tế ("Biến rác thành quà!") */}
            <div className="bg-white rounded-3xl border-2 border-[#DCEEE1] p-6 sm:p-7 flex flex-col justify-between shadow-xs transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(78,139,98,0.22)] hover:border-[#52A36F] cursor-pointer relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#3B734E] to-[#5FB87C]" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#E3F2E7] text-[#2F5E3C] flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300 shadow-2xs">
                    ♻️
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-[#EBF3ED] text-[#3E6D4E] text-[11px] font-medium">
                    Mục tiêu 02
                  </span>
                </div>

                <h3 className="text-lg font-normal text-[#1D3A24] mb-3 leading-snug group-hover:text-[#2F5E3C] transition-colors">
                  Workshop tái chế & Trải nghiệm thực tế ("Biến rác thành quà!")
                </h3>

                <p className="text-xs sm:text-sm font-light text-[#43644D] leading-relaxed">
                  Không lý thuyết giáo điều! Tụi mình tổ chức các workshop tự tay tái chế chai nhựa, hộp sữa, bìa carton thành chậu hoa, hộp bút dễ thương. Học sinh được tận mắt thấy đồ bỏ đi có thể trở thành vật phẩm đáng yêu và hữu ích.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F0F6F1] flex items-center justify-between text-xs text-[#3E6D4E] font-medium">
                <span>Biến rác thành quà tặng</span>
                <span className="group-hover:translate-x-1.5 transition-transform duration-200">→</span>
              </div>
            </div>

            {/* Khung 3: Tạo việc làm cho các bạn “đặc biệt” (hòa nhập cộng đồng & tạo sinh kế xanh) */}
            <div className="bg-white rounded-3xl border-2 border-[#DCEEE1] p-6 sm:p-7 flex flex-col justify-between shadow-xs transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(217,119,6,0.22)] hover:border-[#F59E0B] cursor-pointer relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#D97706] to-[#F59E0B]" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#FFF6E9] text-[#995B00] flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300 shadow-2xs">
                    🤝
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-[#FFF3E0] text-[#995B00] text-[11px] font-medium">
                    Mục tiêu 03
                  </span>
                </div>

                <h3 className="text-lg font-normal text-[#1D3A24] mb-3 leading-snug group-hover:text-[#995B00] transition-colors">
                  Tạo việc làm cho các bạn “đặc biệt”
                </h3>

                <p className="text-xs sm:text-sm font-light text-[#43644D] leading-relaxed">
                  Hòa nhập cộng đồng & tạo sinh kế xanh! Dự án đồng hành và mở ra cơ hội việc làm ấm áp cho các bạn trẻ khuyết tật, bạn yếu thế trong khâu làm đồ thủ công tái chế, ươm mầm cây và đóng gói sản phẩm xanh, giúp các bạn tự tin và có thêm thu nhập.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F0F6F1] flex items-center justify-between text-xs text-[#995B00] font-medium">
                <span>Hòa nhập & Sinh kế xanh</span>
                <span className="group-hover:translate-x-1.5 transition-transform duration-200">→</span>
              </div>
            </div>

          </div>
        </section>


        {/* 3. QUÁ TRÌNH CỦA CHÚNG MÌNH: MỖI KHUNG ĐỀU CÓ CHỮ VÀ KHUNG ĐỂ HÌNH ẢNH (HOVER LIFT & GLOW: y: -8px) */}
        <section className="space-y-5">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#487856] font-medium mb-1">
              <Layers className="w-4 h-4 text-[#52A36F]" />
              <span>Hành trình trưởng thành</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-light text-[#1D3A24]">
              Quá trình của chúng mình
            </h2>
            <p className="text-xs sm:text-sm font-light text-[#53735E] mt-1">
              “Từ những ý tưởng đơn giản, những buổi thử nghiệm miệt mài……”
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            
            {/* Giai đoạn 1: Khởi nguồn ý tưởng đơn giản (icon 🌍 + khung ảnh thiên nhiên) */}
            <div className="bg-white rounded-3xl border-2 border-[#DCEEE1] overflow-hidden flex flex-col justify-between shadow-xs transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(78,139,98,0.22)] hover:border-[#52A36F] cursor-pointer group">
              <div className="h-1.5 bg-gradient-to-r from-[#4E8B62] to-[#7BC997]" />

              {/* Khung để hình ảnh thực tế sắc nét */}
              <div className="aspect-[16/11] overflow-hidden bg-[#E2EFE5] relative">
                <img
                  src={HERO_IMAGE}
                  alt="Khởi nguồn ý tưởng đơn giản"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-medium">
                  🌍 Ý Tưởng Đầu Tiên
                </span>
              </div>

              {/* Tiêu đề & Icon (chỉ cần hình ảnh và tiêu đề, không cần nội dung) */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#EBF3ED] text-[#3E6D4E] text-[11px] font-medium">
                    Giai đoạn 01
                  </span>
                  <span className="text-xl">🌍</span>
                </div>

                <h3 className="text-base sm:text-lg font-normal text-[#1D3A24] leading-snug group-hover:text-[#2F5E3C] transition-colors">
                  Khởi nguồn ý tưởng đơn giản
                </h3>
              </div>
            </div>

            {/* Giai đoạn 2: Những buổi thử nghiệm miệt mài (icon ♻️ + khung ảnh chụp thực tế học sinh chế tạo chậu tái chế) */}
            <div className="bg-white rounded-3xl border-2 border-[#DCEEE1] overflow-hidden flex flex-col justify-between shadow-xs transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(78,139,98,0.22)] hover:border-[#52A36F] cursor-pointer group">
              <div className="h-1.5 bg-gradient-to-r from-[#3B734E] to-[#5FB87C]" />

              {/* Khung để hình ảnh thực tế sắc nét */}
              <div className="aspect-[16/11] overflow-hidden bg-[#E2EFE5] relative">
                <img
                  src={PROCESS_TESTING_IMAGE}
                  alt="Những buổi thử nghiệm miệt mài làm chậu tái chế"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#2F5E3C]/80 backdrop-blur-md text-white text-[11px] font-medium">
                  ♻️ Thử Nghiệm Miệt Mài
                </span>
              </div>

              {/* Tiêu đề & Icon (chỉ cần hình ảnh và tiêu đề, không cần nội dung) */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#EBF3ED] text-[#3E6D4E] text-[11px] font-medium">
                    Giai đoạn 02
                  </span>
                  <span className="text-xl">♻️</span>
                </div>

                <h3 className="text-base sm:text-lg font-normal text-[#1D3A24] leading-snug group-hover:text-[#2F5E3C] transition-colors">
                  Những buổi thử nghiệm miệt mài
                </h3>
              </div>
            </div>

            {/* Giai đoạn 3: Đồng hành & Trao gửi yêu thương (icon 🤝 + khung ảnh chậu cây mầm xanh trao tặng) */}
            <div className="bg-white rounded-3xl border-2 border-[#DCEEE1] overflow-hidden flex flex-col justify-between shadow-xs transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(217,119,6,0.22)] hover:border-[#F59E0B] cursor-pointer group">
              <div className="h-1.5 bg-gradient-to-r from-[#D97706] to-[#F59E0B]" />

              {/* Khung để hình ảnh thực tế sắc nét */}
              <div className="aspect-[16/11] overflow-hidden bg-[#E2EFE5] relative">
                <img
                  src={PRODUCT_KIT_IMAGE_2}
                  alt="Đồng hành cùng các bạn đặc biệt và trao gửi yêu thương"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#B25E00]/80 backdrop-blur-md text-white text-[11px] font-medium">
                  🤝 Trao Gửi Yêu Thương
                </span>
              </div>

              {/* Tiêu đề & Icon (chỉ cần hình ảnh và tiêu đề, không cần nội dung) */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#FFF3E0] text-[#995B00] text-[11px] font-medium">
                    Giai đoạn 03
                  </span>
                  <span className="text-xl">🤝</span>
                </div>

                <h3 className="text-base sm:text-lg font-normal text-[#1D3A24] leading-snug group-hover:text-[#995B00] transition-colors">
                  Đồng hành & Trao gửi yêu thương
                </h3>
              </div>
            </div>

          </div>
        </section>


        {/* 4. ĐỊNH HƯỚNG TƯƠNG LAI: 3 THẺ MÀU PASTEL TƯƠI TẮN (🎒, 🚲, 🎓) */}
        <section className="bg-white rounded-3xl border-2 border-[#DCEEE1] p-7 sm:p-9 shadow-xs space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#487856] font-medium mb-1">
                <Compass className="w-4 h-4 text-[#52A36F]" />
                <span>Tầm nhìn phía trước</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-light text-[#1D3A24]">
                Định hướng tương lai
              </h2>
            </div>
            <span className="text-xs px-3 py-1.5 rounded-full bg-[#EBF3ED] text-[#2F5E3C] font-normal border border-[#D5E9DC]">
              Hành trình xanh tiếp nối
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            
            {/* Thẻ 1: 🎒 */}
            <div className="p-6 rounded-2xl bg-[#FFFBF5] border-2 border-[#FFE8CC] flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(178,94,0,0.18)] hover:border-[#F59E0B] cursor-pointer">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 rounded-full bg-[#FFE8CC] text-[#B25E00] text-xs font-semibold flex items-center gap-1.5">
                    <Backpack className="w-3.5 h-3.5" />
                    <span>Mở rộng mạng lưới</span>
                  </span>
                  <span className="text-2xl">🎒</span>
                </div>
                <h3 className="text-base font-normal text-[#1D3A24] mb-2 leading-snug">
                  Kết nối với nhiều cơ sở trường học để lan tỏa…
                </h3>
                <p className="text-xs font-light text-[#4A7256] leading-relaxed">
                  Đưa các buổi workshop sinh thái đến thật nhiều trường Tiểu học, THCS và THPT trên địa bàn và các tỉnh lân cận, xây dựng câu lạc bộ xanh nòng cốt tại từng trường.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-[#FFE8CC] text-[11px] font-medium text-[#B25E00]">
                Lan tỏa học đường không giới hạn →
              </div>
            </div>

            {/* Thẻ 2: 🚲 */}
            <div className="p-6 rounded-2xl bg-[#F4FAF6] border-2 border-[#CFE8D7] flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(78,139,98,0.22)] hover:border-[#52A36F] cursor-pointer">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 rounded-full bg-[#D8EEDF] text-[#245C34] text-xs font-semibold flex items-center gap-1.5">
                    <Bike className="w-3.5 h-3.5" />
                    <span>Nâng cao ý thức</span>
                  </span>
                  <span className="text-2xl">🚲</span>
                </div>
                <h3 className="text-base font-normal text-[#1D3A24] mb-2 leading-snug">
                  Nâng cao ý thức vì một cộng đồng yêu môi trường…
                </h3>
                <p className="text-xs font-light text-[#4A7256] leading-relaxed">
                  Tạo thói quen phân loại rác và tái chế tự nhiên trong đời sống thường ngày, để mỗi học sinh trở thành một đại sứ xanh truyền cảm hứng cho bạn bè và gia đình.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-[#CFE8D7] text-[11px] font-medium text-[#245C34]">
                Cộng đồng văn minh xanh sạch →
              </div>
            </div>

            {/* Thẻ 3: 🎓 */}
            <div className="p-6 rounded-2xl bg-[#F5F8FF] border-2 border-[#D6E3FF] flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(30,78,184,0.18)] hover:border-[#3B82F6] cursor-pointer">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 rounded-full bg-[#D6E3FF] text-[#1E4EB8] text-xs font-semibold flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>Trải nghiệm mới</span>
                  </span>
                  <span className="text-2xl">🎓</span>
                </div>
                <h3 className="text-base font-normal text-[#1D3A24] mb-2 leading-snug">
                  Tạo ra nhiều trải nghiệm mới mẻ và thú vị…
                </h3>
                <p className="text-xs font-light text-[#4A7256] leading-relaxed">
                  Liên tục cải tiến các bộ kit sinh thái, mở rộng các chuyến dã ngoại cảm thụ thiên nhiên, trại hè sinh học ứng dụng và triển lãm nghệ thuật từ rác tái chế.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-[#D6E3FF] text-[11px] font-medium text-[#1E4EB8]">
                Sáng tạo không ngừng vì Trái Đất →
              </div>
            </div>

          </div>
        </section>


        {/* 5. SẢN PHẨM CỦA CHÚNG MÌNH: BỘ KIT ƯƠM MẦM XANH – FPT LONG VÂN (2 Ô HÌNH ẢNH) */}
        <section className="bg-white rounded-3xl border-2 border-[#DCEEE1] p-7 sm:p-9 shadow-xs space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#487856] font-medium mb-1">
                <Package className="w-4 h-4 text-[#52A36F]" />
                <span>Sáng kiến nổi bật</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-light text-[#1D3A24]">
                Sản phẩm của chúng mình
              </h2>
            </div>

            <span className="text-xs px-3 py-1.5 rounded-full bg-[#E3F2E7] text-[#2F5E3C] font-normal border border-[#C5E3CD]">
              Bộ Kit Ươm Mầm Xanh 🌱
            </span>
          </div>

          {/* 2 Ô HÌNH ẢNH SẢN PHẨM THỰC TẾ */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Ô ảnh 1: Trọn bộ Kit */}
            <div className="border-2 border-[#DCEEE1] rounded-3xl overflow-hidden bg-[#F6FAF6] shadow-xs transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(78,139,98,0.22)] hover:border-[#52A36F] group">
              <div className="aspect-[4/3] overflow-hidden bg-[#E2EFE5] relative">
                <img
                  src={PRODUCT_KIT_IMAGE_1}
                  alt="Trọn bộ hộp Bộ Kit Ươm Mầm Xanh: chậu xơ dừa, hạt giống hoa dại bản địa, viên nén mùn hữu cơ, thẻ tên gỗ"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-medium">
                  📦 Trọn bộ hộp Bộ Kit Ươm Mầm Xanh
                </span>
              </div>
              <div className="p-5">
                <h4 className="text-base font-normal text-[#1D3A24] mb-1">
                  Trọn bộ hộp Bộ Kit Ươm Mầm Xanh
                </h4>
                <p className="text-xs font-light text-[#43644D] leading-relaxed">
                  Bao gồm chậu xơ dừa, hạt giống hoa dại bản địa, viên nén mùn hữu cơ và thẻ tên gỗ đáng yêu.
                </p>
              </div>
            </div>

            {/* Ô ảnh 2: Chậu cây tái chế tự tay vẽ trang trí đâm chồi mầm xanh */}
            <div className="border-2 border-[#DCEEE1] rounded-3xl overflow-hidden bg-[#F6FAF6] shadow-xs transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(78,139,98,0.22)] hover:border-[#52A36F] group">
              <div className="aspect-[4/3] overflow-hidden bg-[#E2EFE5] relative">
                <img
                  src={PRODUCT_KIT_IMAGE_2}
                  alt="Chậu cây tái chế do các bạn tự tay vẽ trang trí, đâm chồi mầm xanh tươi tốt"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#2F5E3C]/80 backdrop-blur-md text-white text-xs font-medium">
                  🌱 Mầm Xanh Tươi Tốt
                </span>
              </div>
              <div className="p-5">
                <h4 className="text-base font-normal text-[#1D3A24] mb-1">
                  Chậu Cây Tái Chế Handmade
                </h4>
                <p className="text-xs font-light text-[#43644D] leading-relaxed">
                  Chậu cây tái chế do các bạn tự tay vẽ trang trí, đâm chồi mầm xanh tươi tốt và thân thiện với môi trường.
                </p>
              </div>
            </div>

          </div>

          {/* Lời giới thiệu chuẩn xác theo đúng yêu cầu */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#F0F7F2] border border-[#CCE5D4] space-y-3">
            <p className="text-sm sm:text-base font-light text-[#22402B] leading-relaxed">
              Bộ Kit Ươm mầm xanh từ các bạn học sinh trường <strong className="font-medium text-[#1D3A24]">Tiểu học, THCS và THPT FPT Long Vân</strong> hứa hẹn sẽ mang đến cho các bạn một trải nghiệm mới lạ với cách “hô biến” từ những thứ dường như bỏ đi trở thành chậu cây vừa dễ thương vừa thân thiện với môi trường.
            </p>
            <p className="text-xs sm:text-sm font-light text-[#3C6448] italic flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#EAB308] shrink-0" />
              <span>Khi các bạn đến workshop sẽ còn nhiều thứ đang chờ các bạn trải nghiệm nữa nhé…. ✨</span>
            </p>
          </div>
        </section>


        {/* 6. HÌNH ẢNH HOẠT ĐỘNG CHÂN THẬT VỚI NHÃN DÁN VUI NHỘN (Tái Chế Cực Chill, Ươm Mầm Sự Sống, Vui Nổ Trời) */}
        <section className="bg-white rounded-3xl border-2 border-[#DCEEE1] p-7 sm:p-9 shadow-xs space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#487856] font-medium mb-1">
                <Sparkles className="w-4 h-4 text-[#E05353]" />
                <span>Khoảnh khắc chân thật</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-light text-[#1D3A24]">
                Hình ảnh hoạt động chân thật
              </h2>
            </div>
            <span className="text-xs px-3 py-1.5 rounded-full bg-[#EBF3ED] text-[#2F5E3C] font-normal border border-[#D5E9DC]">
              📸 100% Ảnh chụp thực tế các buổi workshop
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Ảnh 1: Workshop tái chế -> Nhãn "♻️ Tái Chế Cực Chill" */}
            <div className="border-2 border-[#DCEEE1] rounded-3xl overflow-hidden bg-[#F6FAF6] flex flex-col justify-between shadow-xs transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(78,139,98,0.22)] hover:border-[#52A36F] group">
              <div>
                <div className="aspect-[16/11] overflow-hidden bg-[#E2EFE5] relative">
                  <img
                    src={RECYCLING_WORKSHOP_IMAGE}
                    alt="Workshop làm chậu cây từ chai lọ, bìa carton"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Nhãn dán phong cách sticker trẻ trung theo đúng yêu cầu */}
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-white text-xs font-medium border border-white/20 shadow-xs">
                    ♻️ Tái Chế Cực Chill
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-normal text-[#1D3A24] mb-1.5">
                    Làm workshop tái chế
                  </h3>
                  <p className="text-xs font-light text-[#43644D] leading-relaxed">
                    Workshop làm chậu cây từ chai lọ, bìa carton và phế liệu sạch để bàn học thêm xinh.
                  </p>
                </div>
              </div>
            </div>

            {/* Ảnh 2: Trồng cây -> Nhãn "🌱 Ươm Mầm Sự Sống" */}
            <div className="border-2 border-[#DCEEE1] rounded-3xl overflow-hidden bg-[#F6FAF6] flex flex-col justify-between shadow-xs transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(78,139,98,0.22)] hover:border-[#52A36F] group">
              <div>
                <div className="aspect-[16/11] overflow-hidden bg-[#E2EFE5] relative">
                  <img
                    src={NURSERY_IMAGE}
                    alt="Trồng cây và ươm giống hoa dại bản địa"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Nhãn dán phong cách sticker trẻ trung theo đúng yêu cầu */}
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#2F5E3C]/85 backdrop-blur-md text-white text-xs font-medium border border-white/20 shadow-xs">
                    🌱 Ươm Mầm Sự Sống
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-normal text-[#1D3A24] mb-1.5">
                    Trồng cây & Ươm hoa
                  </h3>
                  <p className="text-xs font-light text-[#43644D] leading-relaxed">
                    Trồng cây và ươm giống hoa dại bản địa, nâng niu từng mầm non đâm chồi xanh biếc.
                  </p>
                </div>
              </div>
            </div>

            {/* Ảnh 3: Dạy học -> Nhãn "🎉 Vui Nổ Trời" */}
            <div className="border-2 border-[#DCEEE1] rounded-3xl overflow-hidden bg-[#F6FAF6] flex flex-col justify-between shadow-xs transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(78,139,98,0.22)] hover:border-[#52A36F] group">
              <div>
                <div className="aspect-[16/11] overflow-hidden bg-[#E2EFE5] relative">
                  <img
                    src={EDUCATION_IMAGE}
                    alt="Dạy học và sinh hoạt môi trường ngoài trời tràn ngập nụ cười"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Nhãn dán phong cách sticker trẻ trung theo đúng yêu cầu */}
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#1E4EB8]/85 backdrop-blur-md text-white text-xs font-medium border border-white/20 shadow-xs">
                    🎉 Vui Nổ Trời
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-normal text-[#1D3A24] mb-1.5">
                    Dạy học & Chia sẻ
                  </h3>
                  <p className="text-xs font-light text-[#43644D] leading-relaxed">
                    Dạy học và sinh hoạt môi trường ngoài trời tràn ngập nụ cười và năng lượng tích cực.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>


        {/* 7. HUB MẠNG XÃ HỘI & KẾT NỐI (CHỈ CẦN THẺ HOTLINE 0388759307 - CHỈ ĐỂ TRƯNG CHỨ KHÔNG BẤM VÀO ĐƯỢC) */}
        <section className="bg-gradient-to-br from-[#E8F5ED] via-[#EDF7F1] to-[#E2F1E7] rounded-3xl border-2 border-[#C9E5D2] p-8 sm:p-12 shadow-sm">
          <div className="max-w-xl mx-auto text-center">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white text-[#2F5E3C] text-xs font-medium border border-[#C9E5D2] mb-3 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#EAB308]" />
              <span>Kết nối cùng học sinh trường FPT Long Vân</span>
            </span>

            <h2 className="text-2xl sm:text-3xl font-light text-[#1D3A24] mb-3">
              Thông tin liên hệ chính thức
            </h2>
            <p className="text-xs sm:text-sm font-light text-[#43644D] mb-8">
              Mọi thông tin hợp tác, tổ chức workshop hoặc đăng ký nhận Bộ Kit Ươm Mầm Xanh, xin vui lòng liên hệ qua số hotline chính thức:
            </p>

            {/* THẺ HOTLINE CHỈ ĐỂ TRƯNG - KHÔNG BẤM VÀO ĐƯỢC - CÓ HIỆU ỨNG HOVER LIFT & GLOW */}
            <div className="max-w-md mx-auto p-6 sm:p-8 rounded-3xl bg-[#3B734E] text-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_35px_rgba(59,115,78,0.35)] relative overflow-hidden select-all cursor-default">
              <div className="flex items-center justify-center gap-2 mb-3">
                <span className="text-xs uppercase font-bold tracking-widest px-3 py-1 rounded-full bg-white/20 text-white backdrop-blur-xs">
                  HOTLINE CHÍNH THỨC
                </span>
              </div>

              <div className="flex items-center justify-center gap-3 my-2">
                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-white tracking-wider font-mono">
                  0388759307
                </div>
              </div>

              <p className="text-xs text-white/80 font-light mt-4 pt-3 border-t border-white/20">
                Học sinh trường Tiểu học, THCS và THPT FPT Long Vân · Dã Hoa Khai Xứ
              </p>
            </div>
          </div>
        </section>

      </main>

      {/* Cheerful Bottom Footer */}
      <footer className="border-t border-[#DDECE1] py-8 text-center text-xs font-light text-[#639273] bg-[#F0F6F1]/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-normal text-[#1D3A24]">Dã Hoa Khai Xứ</span>
            <span>·</span>
            <span>Dự án giáo dục môi trường của học sinh trường Tiểu học, THCS và THPT FPT Long Vân 🌱</span>
          </div>
          <button
            onClick={onBackToWelcome}
            className="text-[#2F5E3C] hover:underline cursor-pointer font-medium"
          >
            ← Về màn hình chính
          </button>
        </div>
      </footer>
    </motion.div>
  );
};
