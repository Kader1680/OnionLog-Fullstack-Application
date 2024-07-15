@extends("layouts.master")
@section("content")

<style>
    .post{
        width: 30%;
        height: 60%;
    }
    .bottom{

    }
</style>

<article class="row">
    @foreach ($images as $image)
    <div class="">
        <img class="post" src="images/{{ ($image->src) }}" alt="" srcset="">
        <div class="bottom">
            <img width="30" height="30" src="/assets/—Pngtree—vector like icon_4013523.png" alt="">
        </div>
    </div>
    @endforeach

 </article>
 @endsection
