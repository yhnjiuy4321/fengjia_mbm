<script setup>
import pagehead from '@/components/header.vue'
import pagefooter from '@/components/footer.vue'
import carouselComponent from '@/components/carousel.vue'
import menuComponent from '@/components/menu.vue'
</script>

<template>

  <pagehead/>
  <carouselComponent/>

  <div class="d-flex mt-5">
    <menuComponent/>
    <div class="news_container w-100 p-5">

      <div class="selectBar mb-3">
        <ul class="nav nav-tabs nav-justified">
          <li class="nav-item">
            <a class="nav-link active" id="tour-tab" data-bs-toggle="tab" href="#tour" role="tab" aria-controls="tour" aria-selected="true">導覽簡介</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="deep-tab" data-bs-toggle="tab" href="#deep" role="tab" aria-controls="deep" aria-selected="false">深海區</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="shallow-tab" data-bs-toggle="tab" href="#shallow" role="tab" aria-controls="shallow" aria-selected="false">淺海區</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="ice-tab" data-bs-toggle="tab" href="#ice" role="tab" aria-controls="ice" aria-selected="false">極地世界</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="whale-tab" data-bs-toggle="tab" href="#whale" role="tab" aria-controls="whale" aria-selected="false">鯨魚世界</a>
          </li>
        </ul>
      </div>


      <!--導覽簡介-->
      <div class="tab-content p-3" id="myTabContent">
        <div class="tab-pane fade show active" id="tour" role="tabpanel" aria-labelledby="tour-tab">

          <div class="content">

            <div class="Introduction">
              <a>　　本館展區共分為四大類型，分別是淺海區、深海區、極地世界及鯨魚世界。淺海區展示了豐富多樣的珊瑚礁生態，讓您深入了解熱帶魚類和珊瑚共生的奇妙環境；深海區則帶您探索黑暗而神秘的深海生物，讓人見識到光源稀少的深海奇景；極地世界專注於極地動物的生態，並展示其為了適應寒冷環境所發展的特殊技能；最後，鯨魚世界帶您了解海洋中的巨型生物——鯨魚，介紹其生活習性及保育意識。希望每位參觀者在旅程中增長知識，親身感受到海洋生態的多樣與美麗。</a>
            </div>

            <div class="Main Body mt-5">

              <div class="deepInfo">
                <div class="infoName">
                  <h2>深海區</h2>
                </div>
                <div class="infoContent">
                  <img src="https://picsum.photos/300/100" class="w-100 h-50 pb-3 ">
                  <p>　　深海區是海洋中最神秘的地方，這裡光線稀少，溫度低，壓力高，生物種類繁多，且多數生物體型龐大。深海區展示了深海生物的特殊生理結構和生活習性，讓您了解這些生物如何適應極端環境，並探索深海生物的奇幻世界。</p>
                <div>
                </div>
              </div>
            </div>


            <div class="shallow mt-5">
              <div class="infoName mt-3">
                <h2>淺海區</h2>
              </div>
              <div class="infoContent">
                <img src="https://picsum.photos/300/100" class="w-100 h-50 pb-3 ">
                <p>　　淺海區展示了多樣化的珊瑚礁生態系統，這裡的生物在陽光充足的淺海環境中繁衍生息，形成了極為繽紛的海洋世界。展區內包含色彩繽紛的熱帶魚類、珊瑚及其他無脊椎動物，讓參觀者能近距離觀察海洋生態的和諧共存。透過互動展示和動態影像，您可以了解珊瑚的形成過程、生態平衡的重要性以及保護珊瑚礁的迫切性。希望您能在此展區體驗淺海世界的奇妙與美麗，並增強對海洋保護的認識。</p>
                <div>
                </div>
              </div>
            </div>

              <div class="ice mt-5">
                <div class="infoName mt-3">
                  <h2>極地世界</h2>
                </div>
                <div class="infoContent">
                  <img src="https://picsum.photos/300/100" class="w-100 h-50 pb-3 ">
                  <p>　　淺海區展示了多樣化的珊瑚礁生態系統，這裡的生物在陽光充足的淺海環境中繁衍生息，形成了極為繽紛的海洋世界。展區內包含色彩繽紛的熱帶魚類、珊瑚及其他無脊椎動物，讓參觀者能近距離觀察海洋生態的和諧共存。透過互動展示和動態影像，您可以了解珊瑚的形成過程、生態平衡的重要性以及保護珊瑚礁的迫切性。希望您能在此展區體驗淺海世界的奇妙與美麗，並增強對海洋保護的認識。</p>
                  <div>
                  </div>
                </div>
              </div>

              <div class="whale mt-5">
                <div class="infoName mt-3">
                  <h2>鯨魚世界</h2>
                </div>
                <div class="infoContent">
                  <img src="https://picsum.photos/300/100" class="w-100 h-50 pb-3 ">
                  <p>　　淺海區展示了多樣化的珊瑚礁生態系統，這裡的生物在陽光充足的淺海環境中繁衍生息，形成了極為繽紛的海洋世界。展區內包含色彩繽紛的熱帶魚類、珊瑚及其他無脊椎動物，讓參觀者能近距離觀察海洋生態的和諧共存。透過互動展示和動態影像，您可以了解珊瑚的形成過程、生態平衡的重要性以及保護珊瑚礁的迫切性。希望您能在此展區體驗淺海世界的奇妙與美麗，並增強對海洋保護的認識。</p>
                  <div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="tab-pane fade" id="deep" role="tabpanel" aria-labelledby="deep-tab">
          <div class="content">
            <div class="row">

              <div class="col-md-6 mb-4 w-100">
                <div class="d-flex border p-3 rounded">
                  <img src="https://picsum.photos/200/200" alt="小丑魚" class="rounded me-3 w-50 h-50" >
                  <div>
                    <h5>名稱：小丑魚</h5>
                    <p>學名：Amphiprioninae</p>
                    <p>
                      簡介：小丑魚是一種色彩鮮豔的海水魚，常見於印度洋和西太平洋的熱帶珊瑚礁。他們以與海葵的共生關係聞名，利用特殊的黏液避免被海葵的毒素刺傷，藉此獲得掠食者的保護。小丑魚體型小巧，通常呈橙白相間的條紋，性格活潑。
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-md-6 mb-4 w-100">
                <div class="d-flex border p-3 rounded">
                  <img src="https://picsum.photos/200/200" alt="小丑魚" class="rounded me-3 w-50 h-50" >
                  <div>
                    <h5>名稱：小丑魚</h5>
                    <p>學名：Amphiprioninae</p>
                    <p>
                      簡介：小丑魚是一種色彩鮮豔的海水魚，常見於印度洋和西太平洋的熱帶珊瑚礁。他們以與海葵的共生關係聞名，利用特殊的黏液避免被海葵的毒素刺傷，藉此獲得掠食者的保護。小丑魚體型小巧，通常呈橙白相間的條紋，性格活潑。
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-md-6 mb-4 w-100">
                <div class="d-flex border p-3 rounded">
                  <img src="https://picsum.photos/200/200" alt="小丑魚" class="rounded me-3 w-50 h-50" >
                  <div>
                    <h5>名稱：小丑魚</h5>
                    <p>學名：Amphiprioninae</p>
                    <p>
                      簡介：小丑魚是一種色彩鮮豔的海水魚，常見於印度洋和西太平洋的熱帶珊瑚礁。他們以與海葵的共生關係聞名，利用特殊的黏液避免被海葵的毒素刺傷，藉此獲得掠食者的保護。小丑魚體型小巧，通常呈橙白相間的條紋，性格活潑。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="shallow" role="tabpanel" aria-labelledby="shallow-tab">
          <div class="content">
            <div class="row">

              <div class="col-md-6 mb-4 w-100">
                <div class="d-flex border p-3 rounded">
                  <img src="https://picsum.photos/200/200" alt="小丑魚" class="rounded me-3 w-50 h-50" >
                  <div>
                    <h5>名稱：小丑魚</h5>
                    <p>學名：Amphiprioninae</p>
                    <p>
                      簡介：小丑魚是一種色彩鮮豔的海水魚，常見於印度洋和西太平洋的熱帶珊瑚礁。他們以與海葵的共生關係聞名，利用特殊的黏液避免被海葵的毒素刺傷，藉此獲得掠食者的保護。小丑魚體型小巧，通常呈橙白相間的條紋，性格活潑。
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-md-6 mb-4 w-100">
                <div class="d-flex border p-3 rounded">
                  <img src="https://picsum.photos/200/200" alt="小丑魚" class="rounded me-3 w-50 h-50" >
                  <div>
                    <h5>名稱：小丑魚</h5>
                    <p>學名：Amphiprioninae</p>
                    <p>
                      簡介：小丑魚是一種色彩鮮豔的海水魚，常見於印度洋和西太平洋的熱帶珊瑚礁。他們以與海葵的共生關係聞名，利用特殊的黏液避免被海葵的毒素刺傷，藉此獲得掠食者的保護。小丑魚體型小巧，通常呈橙白相間的條紋，性格活潑。
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-md-6 mb-4 w-100">
                <div class="d-flex border p-3 rounded">
                  <img src="https://picsum.photos/200/200" alt="小丑魚" class="rounded me-3 w-50 h-50" >
                  <div>
                    <h5>名稱：小丑魚</h5>
                    <p>學名：Amphiprioninae</p>
                    <p>
                      簡介：小丑魚是一種色彩鮮豔的海水魚，常見於印度洋和西太平洋的熱帶珊瑚礁。他們以與海葵的共生關係聞名，利用特殊的黏液避免被海葵的毒素刺傷，藉此獲得掠食者的保護。小丑魚體型小巧，通常呈橙白相間的條紋，性格活潑。
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div class="tab-pane fade" id="ice" role="tabpanel" aria-labelledby="ice-tab">
          <div class="content">
            <div class="row">

              <div class="col-md-6 mb-4 w-100">
                <div class="d-flex border p-3 rounded">
                  <img src="https://picsum.photos/200/200" alt="小丑魚" class="rounded me-3 w-50 h-50" >
                  <div>
                    <h5>名稱：小丑魚</h5>
                    <p>學名：Amphiprioninae</p>
                    <p>
                      簡介：小丑魚是一種色彩鮮豔的海水魚，常見於印度洋和西太平洋的熱帶珊瑚礁。他們以與海葵的共生關係聞名，利用特殊的黏液避免被海葵的毒素刺傷，藉此獲得掠食者的保護。小丑魚體型小巧，通常呈橙白相間的條紋，性格活潑。
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-md-6 mb-4 w-100">
                <div class="d-flex border p-3 rounded">
                  <img src="https://picsum.photos/200/200" alt="小丑魚" class="rounded me-3 w-50 h-50" >
                  <div>
                    <h5>名稱：小丑魚</h5>
                    <p>學名：Amphiprioninae</p>
                    <p>
                      簡介：小丑魚是一種色彩鮮豔的海水魚，常見於印度洋和西太平洋的熱帶珊瑚礁。他們以與海葵的共生關係聞名，利用特殊的黏液避免被海葵的毒素刺傷，藉此獲得掠食者的保護。小丑魚體型小巧，通常呈橙白相間的條紋，性格活潑。
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-md-6 mb-4 w-100">
                <div class="d-flex border p-3 rounded">
                  <img src="https://picsum.photos/200/200" alt="小丑魚" class="rounded me-3 w-50 h-50" >
                  <div>
                    <h5>名稱：小丑魚</h5>
                    <p>學名：Amphiprioninae</p>
                    <p>
                      簡介：小丑魚是一種色彩鮮豔的海水魚，常見於印度洋和西太平洋的熱帶珊瑚礁。他們以與海葵的共生關係聞名，利用特殊的黏液避免被海葵的毒素刺傷，藉此獲得掠食者的保護。小丑魚體型小巧，通常呈橙白相間的條紋，性格活潑。
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div class="tab-pane fade" id="whale" role="tabpanel" aria-labelledby="whale-tab">
          <div class="content">
            <div class="row">

              <div class="col-md-6 mb-4 w-100">
                <div class="d-flex border p-3 rounded">
                  <img src="https://picsum.photos/200/200" alt="小丑魚" class="rounded me-3 w-50 h-50" >
                  <div>
                    <h5>名稱：小丑魚</h5>
                    <p>學名：Amphiprioninae</p>
                    <p>
                      簡介：小丑魚是一種色彩鮮豔的海水魚，常見於印度洋和西太平洋的熱帶珊瑚礁。他們以與海葵的共生關係聞名，利用特殊的黏液避免被海葵的毒素刺傷，藉此獲得掠食者的保護。小丑魚體型小巧，通常呈橙白相間的條紋，性格活潑。
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-md-6 mb-4 w-100">
                <div class="d-flex border p-3 rounded">
                  <img src="https://picsum.photos/200/200" alt="小丑魚" class="rounded me-3 w-50 h-50" >
                  <div>
                    <h5>名稱：小丑魚</h5>
                    <p>學名：Amphiprioninae</p>
                    <p>
                      簡介：小丑魚是一種色彩鮮豔的海水魚，常見於印度洋和西太平洋的熱帶珊瑚礁。他們以與海葵的共生關係聞名，利用特殊的黏液避免被海葵的毒素刺傷，藉此獲得掠食者的保護。小丑魚體型小巧，通常呈橙白相間的條紋，性格活潑。
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-md-6 mb-4 w-100">
                <div class="d-flex border p-3 rounded">
                  <img src="https://picsum.photos/200/200" alt="小丑魚" class="rounded me-3 w-50 h-50" >
                  <div>
                    <h5>名稱：小丑魚</h5>
                    <p>學名：Amphiprioninae</p>
                    <p>
                      簡介：小丑魚是一種色彩鮮豔的海水魚，常見於印度洋和西太平洋的熱帶珊瑚礁。他們以與海葵的共生關係聞名，利用特殊的黏液避免被海葵的毒素刺傷，藉此獲得掠食者的保護。小丑魚體型小巧，通常呈橙白相間的條紋，性格活潑。
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
  </div>
</div>

  <pagefooter/>
</template>

<style scoped>

</style>