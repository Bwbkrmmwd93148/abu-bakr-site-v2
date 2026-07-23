export type OilCategoryKey = 'motor' | 'military-aviation' | 'civilian-aviation' | 'transformer' | 'hydraulic' | 'synthetic' | 'historical';

export interface CategoryMeta {
  nameAr: string;
  nameEn: string;
  icon: string;
  color: string;
  tailwindColor: string;
  description: string;
}

export const CATEGORIES: Record<OilCategoryKey, CategoryMeta> = {
  motor: {
    nameAr: 'زيوت المحركات',
    nameEn: 'Motor Oils',
    icon: '⚙️',
    color: 'blue',
    tailwindColor: 'text-blue-400 bg-blue-400/10 border-blue-400/30',
    description: 'تشمل جميع تصنيفات API وSAE وILSAC وACEA لزيوت محركات السيارات والشاحنات والمركبات الثقيلة والدراجات النارية',
  },
  'military-aviation': {
    nameAr: 'زيوت الطائرات الحربية',
    nameEn: 'Military Aviation Oils',
    icon: '🛩️',
    color: 'red',
    tailwindColor: 'text-red-400 bg-red-400/10 border-red-400/30',
    description: 'المواصفات العسكرية الأمريكية MIL-PRF وNATO وDOD لزيوت التوربينات والمحركات في الطائرات الحربية والعمودية',
  },
  'civilian-aviation': {
    nameAr: 'زيوت الطائرات المدنية',
    nameEn: 'Civilian Aviation Oils',
    icon: '✈️',
    color: 'sky',
    tailwindColor: 'text-sky-400 bg-sky-400/10 border-sky-400/30',
    description: 'زيوت التوربينات المدنية المعتمدة من FAA وEASA لمحركات الطائرات التجارية والخاصة والمروحية',
  },
  transformer: {
    nameAr: 'زيوت المحولات الكهربائية',
    nameEn: 'Transformer Oils',
    icon: '⚡',
    color: 'amber',
    tailwindColor: 'text-amber-400 bg-amber-400/10 border-amber-400/30',
    description: 'زيوت العزل الكهربائي والتبريد للمحولات الكهربائية وفق معايير IEEE وIEC وASTM والمواصفات العسكرية',
  },
  hydraulic: {
    nameAr: 'السوائل الهيدروليكية',
    nameEn: 'Hydraulic Fluids',
    icon: '🔧',
    color: 'purple',
    tailwindColor: 'text-purple-400 bg-purple-400/10 border-purple-400/30',
    description: 'السوائل الهيدروليكية للطائرات الحربية والمدنية والمركبات العسكرية والمعدات الصناعية الثقيلة',
  },
  synthetic: {
    nameAr: 'الزيوت الاصطناعية المتقدمة',
    nameEn: 'Advanced Synthetic Oils',
    icon: '🧪',
    color: 'green',
    tailwindColor: 'text-green-400 bg-green-400/10 border-green-400/30',
    description: 'زيوت اصطناعية متقدمة من PAO والإسترات الصناعية والطبيعية وزيوت المركبات الكهربائية والهجينة',
  },
  historical: {
    nameAr: 'الزيوت التاريخية والحرب العالمية',
    nameEn: 'Historical & WWII Oils',
    icon: '📜',
    color: 'stone',
    tailwindColor: 'text-yellow-600 bg-yellow-600/10 border-yellow-600/30',
    description: 'تطور زيوت التشحيم عبر التاريخ: من المحاور الخشبية حتى الحرب العالمية الثانية وفجر عصر النفاث',
  },
};
