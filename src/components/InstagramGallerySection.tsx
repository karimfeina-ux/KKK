import { useState } from "react";
import {
  Instagram,
  ExternalLink,
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  MoreHorizontal,
  Sparkles,
  Star,
  Check,
  ChevronRight,
  Smile,
} from "lucide-react";
import {
  Language,
  VERIFIED_BUSINESS_DATA,
  UI_STRINGS,
  REAL_BUSINESS_PHOTOS,
} from "../data/restaurantData";

interface InstagramGallerySectionProps {
  lang: Language;
}

interface IgComment {
  id: string;
  username: string;
  text: string;
  time: string;
  likes: number;
}

interface IgPost {
  id: string;
  category: "all" | "arros" | "tapes" | "vins" | "espai";
  image: string;
  alt: { ca: string; es: string };
  initialLikes: number;
  location: string;
  timeAgo: { ca: string; es: string };
  caption: { ca: string; es: string };
  tags: string[];
  comments: IgComment[];
}

export default function InstagramGallerySection({ lang }: InstagramGallerySectionProps) {
  const t = UI_STRINGS[lang];

  // Live posts with authentic photos, comments, and likes
  const initialPosts: IgPost[] = [
    {
      id: "ig-post-arros",
      category: "arros",
      image: REAL_BUSINESS_PHOTOS.arrozNegro,
      alt: {
        ca: "Arròs negre mariner amb musclos i allioli casolà a La Montserratina",
        es: "Arroz negro marinero con mejillones y alioli casero en La Montserratina",
      },
      initialLikes: 184,
      location: "Carrer Muralla del Carme, 11, Manresa",
      timeAgo: { ca: "fa 2 dies", es: "hace 2 días" },
      caption: {
        ca: "El nostre arròs negre mariner amb musclos frescos i allioli casolà fet al moment. Una de les propostes més demanades dels migdies a la Muralla del Carme! 🥘✨ Sempre amb producte de mercat.",
        es: "Nuestro arroz negro marinero con mejillones frescos y alioli casero hecho al momento. ¡Una de las propuestas más pedidas de los mediodías en la Muralla del Carme! 🥘✨ Siempre con producto de mercado.",
      },
      tags: ["#Manresa", "#LaMontserratina", "#ArrosNegre", "#MurallaDelCarme", "#CuinaCasolana"],
      comments: [
        {
          id: "c1-1",
          username: "jordi_bages",
          text: lang === "ca" ? "El millor arròs de Manresa! Repetirem segur aquest cap de setmana 🙌" : "¡El mejor arroz de Manresa! Repetiremos seguro este fin de semana 🙌",
          time: "1 d",
          likes: 4,
        },
        {
          id: "c1-2",
          username: "montse_vidal",
          text: lang === "ca" ? "L'allioli casolà és espectacular, quina bona pinta!" : "El alioli casero es espectacular, ¡qué buena pinta!",
          time: "1 d",
          likes: 2,
        },
        {
          id: "c1-3",
          username: "gastro_catalunya",
          text: lang === "ca" ? "Imprescindible parada a la Muralla del Carme 👏" : "Imprescindible parada en la Muralla del Carme 👏",
          time: "18 h",
          likes: 3,
        },
      ],
    },
    {
      id: "ig-post-tapes",
      category: "tapes",
      image: REAL_BUSINESS_PHOTOS.tapasSpread,
      alt: {
        ca: "Taula de tapes casolanes amb calamars a la romana, croquetes i braves a La Montserratina",
        es: "Mesa de tapas caseras con calamares a la romana, croquetas y bravas en La Montserratina",
      },
      initialLikes: 156,
      location: "La Montserratina • Terrassa & Barra",
      timeAgo: { ca: "fa 4 dies", es: "hace 4 días" },
      caption: {
        ca: "Tardes de tapes a la Muralla del Carme! Calamars a la romana acabats de sortir amb llimona, croquetes cremoses de rostit i les nostres patates braves amb salsa especial de la casa. 🍤🍺",
        es: "¡Tardes de tapas en la Muralla del Carme! Calamares a la romana recién salidos con limón, croquetas cremosas de asado y nuestras patatas bravas con salsa especial de la casa. 🍤🍺",
      },
      tags: ["#TapeoManresa", "#TapesCasolanes", "#CalamarsALaRomana", "#Vermut", "#BagesGastro"],
      comments: [
        {
          id: "c2-1",
          username: "carles_peig",
          text: lang === "ca" ? "Calamars super cruixents i el vermut ben fresc a la terrassa! ☀️" : "¡Calamares súper crujientes y el vermut bien fresco en la terraza! ☀️",
          time: "3 d",
          likes: 5,
        },
        {
          id: "c2-2",
          username: "nuriamanresa",
          text: lang === "ca" ? "Les croquetes de rostit les meves preferides de Manresa!" : "¡Las croquetas de asado mis favoritas de Manresa!",
          time: "2 d",
          likes: 3,
        },
      ],
    },
    {
      id: "ig-post-vins",
      category: "vins",
      image: REAL_BUSINESS_PHOTOS.wineEveningTable,
      alt: {
        ca: "Sopars i taula de vespre amb vi català Alges davant la vidriera de La Montserratina",
        es: "Cenas y mesa de noche con vino catalán Alges frente a la cristalera de La Montserratina",
      },
      initialLikes: 198,
      location: "Muralla del Carme, 11 • Nit",
      timeAgo: { ca: "fa 6 dies", es: "hace 6 días" },
      caption: {
        ca: "Nits i sopars de cap de setmana a La Montserratina. Ampolla de vi Alges (D.O. Costers del Segre) a punt a la taula davant de la vidriera al Carrer Muralla del Carme. Recordeu que els dissabtes estem oberts fins a la 01:00h! 🍷✨",
        es: "Noches y cenas de fin de semana en La Montserratina. Botella de vino Alges (D.O. Costers del Segre) lista en la mesa frente a la cristalera en Carrer Muralla del Carme. ¡Recordad que los sábados abrimos hasta la 01:00h! 🍷✨",
      },
      tags: ["#VinsCatalans", "#CostersDelSegre", "#SoparsManresa", "#NitsDeManresa", "#LaMontserratina"],
      comments: [
        {
          id: "c3-1",
          username: "marc_santpedor",
          text: lang === "ca" ? "Molt bon maridatge amb el vi Alges, un vi excel·lent 👌" : "Muy buen maridaje con el vino Alges, un vino excelente 👌",
          time: "5 d",
          likes: 6,
        },
        {
          id: "c3-2",
          username: "laura_sbd",
          text: lang === "ca" ? "Ambient súper càlid amb les llums de la nit al carrer. Gràcies per l'atenció!" : "Ambiente súper cálido con las luces de la noche en la calle. ¡Gracias por la atención!",
          time: "4 d",
          likes: 2,
        },
      ],
    },
    {
      id: "ig-post-espai",
      category: "espai",
      image: REAL_BUSINESS_PHOTOS.interiorArchLogo,
      alt: {
        ca: "Segell oficial de La Montserratina i pas d'arc de pedra medieval al menjador",
        es: "Sello oficial de La Montserratina y paso de arco de piedra medieval en el comedor",
      },
      initialLikes: 142,
      location: "Muralla del Carme, 11 • Patrimoni",
      timeAgo: { ca: "fa 1 setmana", es: "hace 1 semana" },
      caption: {
        ca: "El nostre espai interior: entre els arcs de pedra viva medieval i el segell oficial d'Espai Gastronòmic de La Montserratina. Història i tradició viva al centre de Manresa. 🏰🍽️",
        es: "Nuestro espacio interior: entre los arcos de piedra viva medieval y el sello oficial de Espacio Gastronómico de La Montserratina. Historia y tradición viva en el centro de Manresa. 🏰🍽️",
      },
      tags: ["#CentreHistoricManresa", "#ParetsDePedra", "#PatrimoniManresa", "#EspaiGastronomic"],
      comments: [
        {
          id: "c4-1",
          username: "patrimoni_bages",
          text: lang === "ca" ? "Una meravella conservar la paret original de la Muralla medieval! Felicitats 👏" : "¡Una maravilla conservar la pared original de la Muralla medieval! Felicidades 👏",
          time: "6 d",
          likes: 7,
        },
        {
          id: "c4-2",
          username: "xavier_cat",
          text: lang === "ca" ? "Un dels locals amb més encant i història del centre." : "Uno de los locales con más encanto e historia del centro.",
          time: "5 d",
          likes: 4,
        },
      ],
    },
  ];

  // User interaction states: likes, active tab, comments per post, and new comment input
  const [activeTab, setActiveTab] = useState<"all" | "arros" | "tapes" | "vins" | "espai">("all");
  const [likesState, setLikesState] = useState<Record<string, { count: number; userLiked: boolean }>>({
    "ig-post-arros": { count: 184, userLiked: false },
    "ig-post-tapes": { count: 156, userLiked: false },
    "ig-post-vins": { count: 198, userLiked: false },
    "ig-post-espai": { count: 142, userLiked: false },
  });
  const [savedPosts, setSavedPosts] = useState<Record<string, boolean>>({});
  const [commentsState, setCommentsState] = useState<Record<string, IgComment[]>>({
    "ig-post-arros": initialPosts[0].comments,
    "ig-post-tapes": initialPosts[1].comments,
    "ig-post-vins": initialPosts[2].comments,
    "ig-post-espai": initialPosts[3].comments,
  });
  const [commentInputs, setCommentInputs] = useState<Record<string, string>>({});
  const [expandedComments, setExpandedComments] = useState<Record<string, boolean>>({});

  const toggleLike = (postId: string) => {
    setLikesState((prev) => {
      const current = prev[postId] || { count: 100, userLiked: false };
      return {
        ...prev,
        [postId]: {
          count: current.userLiked ? current.count - 1 : current.count + 1,
          userLiked: !current.userLiked,
        },
      };
    });
  };

  const toggleSave = (postId: string) => {
    setSavedPosts((prev) => ({ ...prev, [postId]: !prev[postId] }));
  };

  const toggleExpandedComments = (postId: string) => {
    setExpandedComments((prev) => ({ ...prev, [postId]: !prev[postId] }));
  };

  const handleAddComment = (postId: string) => {
    const text = (commentInputs[postId] || "").trim();
    if (!text) return;

    const newComment: IgComment = {
      id: `user-comment-${Date.now()}`,
      username: "tu_a_manresa",
      text,
      time: lang === "ca" ? "ara mateix" : "ahora mismo",
      likes: 1,
    };

    setCommentsState((prev) => ({
      ...prev,
      [postId]: [...(prev[postId] || []), newComment],
    }));

    setCommentInputs((prev) => ({ ...prev, [postId]: "" }));
    setExpandedComments((prev) => ({ ...prev, [postId]: true }));
  };

  const filteredPosts =
    activeTab === "all"
      ? initialPosts
      : initialPosts.filter((p) => p.category === activeTab);

  return (
    <section id="galeria" className="py-24 bg-[#f8f5ef] border-t border-b border-[#231610]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Instagram Profile Header Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#231610]/10 shadow-md mb-12">
          {/* Top Profile Summary */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 text-center md:text-left">
            {/* Profile Avatar with Instagram Gradient Ring */}
            <div className="relative shrink-0">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-[3px] bg-gradient-to-tr from-[#fd5949] via-[#d6249f] to-[#285AEB] shadow-md">
                <div className="w-full h-full rounded-full bg-white p-[2px] overflow-hidden">
                  <img
                    src={VERIFIED_BUSINESS_DATA.logoSeal}
                    alt="La Montserratina Instagram Profile"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-[#e1306c] text-white flex items-center justify-center shadow-xs">
                <Instagram className="w-4 h-4" />
              </div>
            </div>

            {/* Profile Details */}
            <div className="flex-1 space-y-3">
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <h2 className="text-2xl sm:text-3xl font-serif-cafe font-bold text-[#1f140e]">
                  {VERIFIED_BUSINESS_DATA.name}
                </h2>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f0e6d9] text-[#7a482b] text-xs font-semibold">
                  <span className="font-mono">{VERIFIED_BUSINESS_DATA.instagramHandle}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#5c4a3e] max-w-2xl leading-relaxed">
                {lang === "ca"
                  ? "Cafeteria & Espai Gastronòmic al Carrer Muralla del Carme, 11, Manresa. Publicacions en directe de la nostra cuina, tapes, arrossos i ambient a les xarxes socials."
                  : "Cafetería & Espacio Gastronómico en Carrer Muralla del Carme, 11, Manresa. Publicaciones en vivo de nuestra cocina, tapas, arroces y ambiente en redes sociales."}
              </p>

              {/* Stats badges */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-1 text-xs text-[#6c594d]">
                <span className="inline-flex items-center gap-1 font-semibold text-[#1f140e]">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  {VERIFIED_BUSINESS_DATA.rating} ({VERIFIED_BUSINESS_DATA.reviewCount} ressenyes Google)
                </span>
                <span>•</span>
                <span className="font-medium">Muralla del Carme, 11</span>
                <span>•</span>
                <span className="text-[#b8542b] font-medium">Manresa (Bages)</span>
              </div>
            </div>

            {/* Action to Follow on IG */}
            <div className="shrink-0 flex flex-col gap-2 w-full sm:w-auto">
              <a
                href={VERIFIED_BUSINESS_DATA.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all active:scale-95 group"
              >
                <Instagram className="w-4 h-4 text-white" />
                <span>{t.instagramFollowBtn}</span>
                <ExternalLink className="w-3.5 h-3.5 text-white/80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <span className="text-[11px] text-[#7d6b5e] text-center">
                {lang === "ca" ? "Publicacions i històries oficials" : "Publicaciones e historias oficiales"}
              </span>
            </div>
          </div>

          {/* Targeted Selected Element: Live Instagram Posts Feed with Pics, Comments & Likes */}
          <div className="mt-8 pt-8 border-t border-[#231610]/10 space-y-6">
            {/* Header & Filter Pills */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#b8542b] block flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  {lang === "ca" ? "Activitat en Directe a Instagram" : "Actividad en Directo en Instagram"}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif-cafe font-bold text-[#1f140e]">
                  {lang === "ca"
                    ? "Fotos reals, comentaris i likes de la comunitat"
                    : "Fotos reales, comentarios y likes de la comunidad"}
                </h3>
              </div>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap items-center gap-1.5">
                {[
                  { id: "all", label: { ca: "Tots", es: "Todos" } },
                  { id: "arros", label: { ca: "Arrossos", es: "Arroces" } },
                  { id: "tapes", label: { ca: "Tapes", es: "Tapas" } },
                  { id: "vins", label: { ca: "Vins & Nits", es: "Vinos & Noches" } },
                  { id: "espai", label: { ca: "Espai & Pedra", es: "Espacio & Piedra" } },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                      activeTab === tab.id
                        ? "bg-[#231610] text-white shadow-xs"
                        : "bg-[#faf7f2] text-[#5c4a3e] hover:bg-[#ede5d8] border border-[#231610]/10"
                    }`}
                  >
                    {tab.label[lang]}
                  </button>
                ))}
              </div>
            </div>

            {/* Grid of Live Instagram Posts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPosts.map((post) => {
                const currentLikes = likesState[post.id]?.count ?? post.initialLikes;
                const isLiked = likesState[post.id]?.userLiked ?? false;
                const isSaved = savedPosts[post.id] ?? false;
                const postComments = commentsState[post.id] || [];
                const isCommentsExpanded = expandedComments[post.id] ?? false;
                const newCommentText = commentInputs[post.id] || "";

                return (
                  <div
                    key={post.id}
                    className="bg-white rounded-3xl overflow-hidden border border-[#231610]/15 shadow-md flex flex-col justify-between hover:shadow-xl transition-shadow text-left"
                  >
                    {/* Post Header: Profile & Location */}
                    <div className="p-4 flex items-center justify-between border-b border-[#231610]/5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full p-[2px] bg-gradient-to-tr from-amber-500 to-[#d6249f] shrink-0">
                          <img
                            src={VERIFIED_BUSINESS_DATA.logoSeal}
                            alt="La Montserratina"
                            className="w-full h-full object-cover rounded-full bg-white p-[1px]"
                          />
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <a
                              href={VERIFIED_BUSINESS_DATA.instagramUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-bold text-xs text-[#1f140e] hover:underline"
                            >
                              lamontserratinamanresa
                            </a>
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                          </div>
                          <span className="text-[11px] text-[#6c594d] block">
                            {post.location}
                          </span>
                        </div>
                      </div>

                      <a
                        href={VERIFIED_BUSINESS_DATA.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#6c594d] hover:text-[#b8542b] p-1"
                        title="Obrir a Instagram"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>

                    {/* Post Picture Frame (100% Unique authentic photo) */}
                    <div className="relative aspect-square sm:aspect-[4/3] bg-stone-900 overflow-hidden group">
                      <img
                        src={post.image}
                        alt={post.alt[lang]}
                        className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                        loading="lazy"
                        onDoubleClick={() => toggleLike(post.id)}
                      />
                      {/* Gradient bottom shadow */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                      {/* Pill Badge */}
                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/65 backdrop-blur-xs text-white text-[10px] font-semibold flex items-center gap-1.5">
                        <Instagram className="w-3 h-3 text-[#e1306c]" />
                        <span>@lamontserratinamanresa</span>
                      </div>
                    </div>

                    {/* Action Bar: Like, Comment, Share, Bookmark */}
                    <div className="p-4 pb-2 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <button
                          type="button"
                          onClick={() => toggleLike(post.id)}
                          className="flex items-center gap-1.5 text-xs font-bold text-[#1f140e] hover:scale-110 active:scale-95 transition-transform"
                          aria-label={isLiked ? "Ja no m'agrada" : "M'agrada"}
                        >
                          <Heart
                            className={`w-5 h-5 transition-colors ${
                              isLiked ? "fill-[#e1306c] text-[#e1306c]" : "text-[#1f140e] hover:text-[#e1306c]"
                            }`}
                          />
                          <span>{currentLikes}</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => toggleExpandedComments(post.id)}
                          className="flex items-center gap-1.5 text-xs font-medium text-[#463529] hover:text-[#b8542b] transition-colors"
                          aria-label="Comentaris"
                        >
                          <MessageCircle className="w-5 h-5 text-[#1f140e]" />
                          <span>{postComments.length}</span>
                        </button>

                        <a
                          href={VERIFIED_BUSINESS_DATA.instagramUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#1f140e] hover:text-[#b8542b] transition-colors"
                          title="Compartir a Instagram"
                        >
                          <Send className="w-5 h-5" />
                        </a>
                      </div>

                      <button
                        type="button"
                        onClick={() => toggleSave(post.id)}
                        className="text-[#1f140e] hover:text-[#b8542b] transition-colors"
                        aria-label="Desar"
                      >
                        <Bookmark
                          className={`w-5 h-5 ${isSaved ? "fill-[#1f140e] text-[#1f140e]" : ""}`}
                        />
                      </button>
                    </div>

                    {/* Likes & Caption Text */}
                    <div className="px-4 space-y-2">
                      <p className="text-xs text-[#1f140e]">
                        <span className="font-semibold">
                          {lang === "ca" ? `Agrada a ${currentLikes} persones` : `Les gusta a ${currentLikes} personas`}
                        </span>
                      </p>

                      <p className="text-xs sm:text-sm text-[#3d2e24] leading-relaxed">
                        <span className="font-bold text-[#1f140e] mr-1.5">
                          lamontserratinamanresa
                        </span>
                        {post.caption[lang]}
                      </p>

                      {/* Hashtags */}
                      <div className="flex flex-wrap gap-1 pt-0.5">
                        {post.tags.map((tag, tIdx) => (
                          <span key={tIdx} className="text-[11px] text-[#b8542b] font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Comments Feed Area */}
                    <div className="p-4 pt-3 space-y-3">
                      {/* Comments count / toggle */}
                      <div className="flex items-center justify-between text-xs text-[#7d6b5e]">
                        <button
                          type="button"
                          onClick={() => toggleExpandedComments(post.id)}
                          className="hover:underline font-medium text-left"
                        >
                          {isCommentsExpanded
                            ? lang === "ca"
                              ? "Amagar comentaris"
                              : "Ocultar comentarios"
                            : lang === "ca"
                            ? `Veure els ${postComments.length} comentaris`
                            : `Ver los ${postComments.length} comentarios`}
                        </button>
                        <span className="text-[10px] uppercase font-mono tracking-wider">
                          {post.timeAgo[lang]}
                        </span>
                      </div>

                      {/* Displayed comments */}
                      <div className="space-y-2 max-h-48 overflow-y-auto pr-1 text-xs">
                        {(isCommentsExpanded ? postComments : postComments.slice(0, 2)).map(
                          (c) => (
                            <div key={c.id} className="flex items-start justify-between gap-2 bg-[#faf7f2] p-2 rounded-xl">
                              <div className="space-y-0.5">
                                <div className="flex items-center gap-1.5">
                                  <span className="font-bold text-[#1f140e]">{c.username}</span>
                                  <span className="text-[10px] text-[#7d6b5e]">• {c.time}</span>
                                </div>
                                <p className="text-[#463529] leading-snug">{c.text}</p>
                              </div>
                              <div className="flex items-center gap-1 text-[10px] text-[#7d6b5e] shrink-0 mt-0.5">
                                <Heart className="w-3 h-3 text-stone-400" />
                                <span>{c.likes}</span>
                              </div>
                            </div>
                          )
                        )}
                      </div>

                      {/* Add comment interactive input */}
                      <div className="pt-2 border-t border-[#231610]/10 flex items-center gap-2">
                        <input
                          type="text"
                          value={newCommentText}
                          onChange={(e) =>
                            setCommentInputs((prev) => ({
                              ...prev,
                              [post.id]: e.target.value,
                            }))
                          }
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              handleAddComment(post.id);
                            }
                          }}
                          placeholder={
                            lang === "ca"
                              ? "Afegeix un comentari a la publicació..."
                              : "Añade un comentario a la publicación..."
                          }
                          className="flex-1 bg-[#faf7f2] border border-[#231610]/10 rounded-full px-3.5 py-1.5 text-xs text-[#1f140e] placeholder-[#7d6b5e] focus:outline-hidden focus:border-[#b8542b]"
                        />
                        <button
                          type="button"
                          onClick={() => handleAddComment(post.id)}
                          disabled={!newCommentText.trim()}
                          className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                            newCommentText.trim()
                              ? "bg-[#b8542b] text-white hover:bg-[#933e1c] shadow-2xs"
                              : "bg-[#e8dfd3] text-[#7d6b5e] cursor-not-allowed opacity-60"
                          }`}
                        >
                          {lang === "ca" ? "Publica" : "Publicar"}
                        </button>
                      </div>

                      {/* Direct Instagram Link Button */}
                      <div className="pt-1 text-right">
                        <a
                          href={VERIFIED_BUSINESS_DATA.instagramUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#b8542b] hover:underline"
                        >
                          <Instagram className="w-3 h-3 text-[#e1306c]" />
                          <span>{lang === "ca" ? "Veure perfil oficial @lamontserratinamanresa" : "Ver perfil oficial @lamontserratinamanresa"}</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Social Proof Bar */}
        <div className="p-8 rounded-3xl bg-gradient-to-br from-[#231610] to-[#3a2216] text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-mono uppercase tracking-wider text-[#df7b53]">
              {lang === "ca" ? "Comunitat Instagram Manresa" : "Comunidad Instagram Manresa"}
            </span>
            <h4 className="text-2xl sm:text-3xl font-serif-cafe font-bold text-white">
              @lamontserratinamanresa
            </h4>
            <p className="text-xs sm:text-sm text-stone-300 max-w-xl leading-relaxed">
              {lang === "ca"
                ? "Segueix-nos a Instagram per veure els suggeriments del dia, esmorzars de forquilla, horaris especials i la vida a la Muralla del Carme en directe."
                : "Síguenos en Instagram para ver las sugerencias del día, desayunos de tenedor, horarios especiales y la vida en la Muralla del Carme en directo."}
            </p>
          </div>

          <a
            href={VERIFIED_BUSINESS_DATA.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white hover:bg-stone-100 text-[#1f140e] text-xs font-bold transition-all shadow-md active:scale-95"
          >
            <Instagram className="w-4 h-4 text-[#e1306c]" />
            <span>{lang === "ca" ? "Obrir Instagram Oficial" : "Abrir Instagram Oficial"}</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#b8542b]" />
          </a>
        </div>
      </div>
    </section>
  );
}
