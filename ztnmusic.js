  <!-- Chord Gitar -->
    <script>
            jQuery(document).ready(function() {
                $( &#39;a[href*=&quot;#&quot;]:not([href=&quot;#&quot;])&#39; ).click( function() {
                    jQuery(&quot;tela&quot;).toggleClass(&quot;tela&quot;);
                });
            });
            var match, kuncigitar = [&quot;C&quot;, &quot;C#&quot;, &quot;D&quot;, &quot;D#&quot;, &quot;E&quot;, &quot;F&quot;, &quot;F#&quot;, &quot;G&quot;, &quot;G#&quot;, &quot;A&quot;, &quot;Bb&quot;, &quot;B&quot;, &quot;C&quot;, &quot;C#&quot;, &quot;D&quot;, &quot;D#&quot;, &quot;E&quot;, &quot;F&quot;, &quot;F#&quot;, &quot;G&quot;, &quot;G#&quot;, &quot;A&quot;, &quot;A#&quot;, &quot;B&quot;],
                kuncigitarRegex = /A#|C#|D#|F#|G#|Ab|Bb|Db|Eb|Gb|A|B|C|D|E|F|G/g;
            $(&quot;#transposeUp&quot;).click(function() {
                $(&quot;.ztnchord&quot;).each(function() {
                    for (var e = $(this).html(), i = &quot;&quot;, a = e.split(kuncigitarRegex), c = 0; match = kuncigitarRegex.exec(e);) {
                        var r = kuncigitar.indexOf(match[0]);
                        i += a[c++] + kuncigitar[r + 1]
                    }
                    i = (i = (i = (i = (i = (i += a[c]).replace(/Gb/g, &quot;F#&quot;)).replace(/Ab/g, &quot;G#&quot;)).replace(/Bb/g, &quot;A#&quot;)).replace(/Db/g, &quot;C#&quot;)).replace(/Eb/g, &quot;D#&quot;), $(this).html(i).removeClass(&quot;ztnchord &quot; + e).addClass(&quot;ztnchord &quot; + i)
                })
                $(&#39;.ztnchord&#39;).each(function() {
                    var kunci = $(this).text().trim();
                    var span_ = $(this).find(&#39;span&#39;);
                    if (kunci.includes(&#39;/&#39;)) {
                        var kunci_depan = kunci.split(&#39;/&#39;)[0].replace(&#39;#&#39;, &#39;k&#39;);
                        span_.attr(&#39;class&#39;, &#39;custom ztn-&#39; + kunci_depan);
                    } else {
                        span_.attr(&#39;class&#39;, &#39;custom ztn-&#39; + kunci.replace(&#39;#&#39;, &#39;k&#39;));
                    }
                })
            }), $(&quot;#transposeDown&quot;).click(function() {
                $(&quot;.ztnchord&quot;).each(function() {
                    for (var e = $(this).html(), i = &quot;&quot;, a = e.split(kuncigitarRegex), c = 0; match = kuncigitarRegex.exec(e);) {
                        var r = kuncigitar.indexOf(match[0], 1);
                        i += a[c++] + kuncigitar[r - 1]
                    }
                    i = (i = (i = (i = (i = (i += a[c]).replace(/Gb/g, &quot;F#&quot;)).replace(/Ab/g, &quot;G#&quot;)).replace(/Bb/g, &quot;A#&quot;)).replace(/Db/g, &quot;C#&quot;)).replace(/Eb/g, &quot;D#&quot;), $(this).html(i).removeClass(&quot;ztnchord &quot; + e).addClass(&quot;ztnchord &quot; + i)
                })
                $(&#39;.ztnchord&#39;).each(function() {
                    var kunci = $(this).text().trim();
                    var span_ = $(this).find(&#39;span&#39;);
                    if (kunci.includes(&#39;/&#39;)) {
                        var kunci_depan = kunci.split(&#39;/&#39;)[0].replace(&#39;#&#39;, &#39;k&#39;);
                        span_.attr(&#39;class&#39;, &#39;custom ztn-&#39; + kunci_depan);
                    } else {
                        span_.attr(&#39;class&#39;, &#39;custom ztn-&#39; + kunci.replace(&#39;#&#39;, &#39;k&#39;));
                    }
                })
  });
  <!-- Chord End -->
    <!-- Lirik Mode -->
var match;
var chords =[&#39;.&#39;];
var chordRegex = /C#|D#|F#|G#|A#|Db|Eb|Gb|Ab|Bb|C|D|E|F|G|A|B|m/g;

$(&#39;#lirikHilang&#39;).click(function() {
    $(&#39;.ztnchord&#39;).each(function() {
        var currentChord = $(this).text();
        var output = &quot;&quot;;
        var parts = currentChord.split(chordRegex);
        var index = 0;
        while (match = chordRegex.exec(currentChord))
        {
            var chordIndex = chords.indexOf(match[0]);
            output += parts[index++] + chords[chordIndex+1];
        }
        output += parts[index];
        $(this).text(output);
    });
});
  <!-- Lirik End -->
  <!-- Zoom -->
function resizeText(multiplier) {
var elem = document.getElementById(&quot;sizeable&quot;);
var currentSize = elem.style.fontSize || 1;
elem.style.fontSize = ( parseFloat(currentSize) + (multiplier * 0.2)) + &quot;em&quot;;
}
  <!-- Zoom End --></script>
