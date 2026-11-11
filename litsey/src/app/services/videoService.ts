import { Video, VideoTranslation, VideoResponse } from '../types';
import { API_BASE_URL } from '../../config/api';

const defaultVideos: Video[] = [
  {
    id: 1,
    youtube_url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1562774053-701939374585?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    duration: '04:15',
    is_active: true,
    sort_order: 1,
    created_at: new Date().toISOString(),
    translations: {
      uz: {
        title: "Farg'ona shahar 5-son texnikumi bo'ylab videorolik",
        description: "Texnikumimizning zamonaviy o'quv xonalari, ustaxonalari va talabalar hayotidan qisqacha lavha."
      },
      ru: {
        title: "Видеотур по Техникуму №5 города Ферганы",
        description: "Краткий обзор современных аудиторий, мастерских и студенческой жизни нашего техникума."
      },
      en: {
        title: "Campus Video Tour: Fergana Technicum No. 5",
        description: "A quick glimpse into our modern classrooms, laboratories, and dynamic student life."
      }
    }
  },
  {
    id: 2,
    youtube_url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    duration: '03:40',
    is_active: true,
    sort_order: 2,
    created_at: new Date().toISOString(),
    translations: {
      uz: {
        title: "Muqobil energiya va IT yo'nalishlarida amaliy mashg'ulotlar",
        description: "Quyosh panellarini o'rnatish va zamonaviy axborot texnologiyalari laboratoriyalaridagi darslar jarayoni."
      },
      ru: {
        title: "Практические занятия по возобновляемой энергии и IT",
        description: "Процесс установки солнечных панелей и практические уроки в лабораториях IT."
      },
      en: {
        title: "Hands-on Workshops in Renewable Energy & IT",
        description: "Solar panel installation and practical sessions in our state-of-the-art computer labs."
      }
    }
  }
];

export const videoService = {
  async getVideos(): Promise<VideoResponse> {
    try {
      const response = await fetch(`${API_BASE_URL}/videos/`);
      if (!response.ok) {
        throw new Error('Failed to fetch videos');
      }
      const data = await response.json();
      const list = Array.isArray(data) ? data : (data?.results || []);
      if (list.length > 0) {
        return data;
      }
      return { count: defaultVideos.length, next: null, previous: null, results: defaultVideos };
    } catch {
      return { count: defaultVideos.length, next: null, previous: null, results: defaultVideos };
    }
  },

  getTranslation(video: Video, lang: string): VideoTranslation {
    const translations = video?.translations || ({} as any);
    const fallback: VideoTranslation = { title: '', description: '' };

    if (lang === 'kr' || lang === 'uz_cyrl') {
      return translations.uz_cyrl || translations.uz || fallback;
    }

    return (translations as any)[lang] || translations.uz || fallback;
  },
};
