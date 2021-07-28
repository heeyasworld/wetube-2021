let videos = [
    {
        title:"First Video",
        rating:5,
        comments:2,
        createdAt:"2 minutes ago",
        views:59,
        id:1,
    },
    {
        title:"Second Video",
        rating:5,
        comments:2,
        createdAt:"2 minutes ago",
        views:59,
        id:2,
    },
    {
        title:"Third Video",
        rating:5,
        comments:2,
        createdAt:"2 minutes ago",
        views:1,
        id:3,
    },
];

export const trending = (req, res) => {
    return res.render("home", { pageTitle: "Home", videos });
};
// home.pug를 렌더링해준다 {} 안에는 템플릿에 보내줄 변수 쓰기
export const watch = (req, res) => {
    const  { id } = req.params;
    const video = videos[id-1];
    return res.render("watch", { pageTitle: `Watching : ${video.title}`, video });
};
export const getEdit = (req, res) => {
    const  { id } = req.params;
    const video = videos[id-1];
    return res.render("edit", { pageTitle: `Editing : ${video.title}`, video });
};
export const postEdit = (req, res) => {
    const  { id } = req.params;
    const { title } = req.body;
    //req.body 씀으로서 form 안에 title값으로 입력한 걸 받아온다
    videos[id-1].title = title;
    //form으로부터 받아온 title값을 새값으로 넣어준다
    return res.redirect(`/videos/${id}`);
};