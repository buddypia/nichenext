import { HomeClient } from "@/app/HomeClient"
import { getAllTrendingProductsEfficiently } from "@/lib/api/products-server"
import { getLocale } from "@/lib/utils/locale"

export default async function HomePage() {
  const locale = await getLocale()
  
  // 一括で効率的にデータ取得（国コードフィルタ付き）
  const trendingData = await getAllTrendingProductsEfficiently(locale)

  return (
    <HomeClient 
      trendingToday={trendingData.today}
      trendingWeek={trendingData.week}
      trendingMonth={trendingData.month}
      trendingTodayTotal={trendingData.todayTotal}
      trendingWeekTotal={trendingData.weekTotal}
      trendingMonthTotal={trendingData.monthTotal}
    />
  )
}
