@extends("layouts.master")
@section("content")

<style>
    .post{
        width: 60%;
        height: 86%;
    }
    .bottom{

    }
    .home{
        background-color: antiquewhite
    }
    .home article{
        background-color: rgb(245, 197, 134)
    }

    .box{
        background-color: #ededed;
        border-radius: 11px;
        border: 2px solid #104b57;
    }
</style>
<div class="home ">
    {{-- <article class="row" >
        @foreach ($images as $image)
        <div class="col-md-6 col-sm-12 box">
            <img  class="post" src="images/{{ ($image->src) }}" alt="" srcset="">
            <div class="bottom">
                
                <img width="30" height="30" src="/assets/—Pngtree—vector like icon_4013523.png" alt="">
                <i class=" fs-2 pt-1 fa-regular fa-comment"></i>
                
            </div>
        </div>
        @endforeach
    
     </article> --}}


     @foreach($data as $row)
        <video width="320" height="240" autoplay muted>
        <source src="{{asset('upload')}}/{{$row->path}}" type="video/mp4">
        </video>
    @endforeach
</div>

 @endsection
