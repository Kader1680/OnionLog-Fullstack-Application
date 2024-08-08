@extends("layouts.master")
@section("content")

<style>
    .post{
        width: 60%;
        height: 86%;
    }
    .bottom{

    }
</style>

<div class="upload">
    <p>
        <form enctype="multipart/form-data"  action="/upload" method="post">
            @csrf
            <button class="border-0 p-2 w-100" type="submit">Submit</button>
            <input name="src" type="file" multiple="false" " id=finput >
        </form>
    </p>

</div>
 @endsection
